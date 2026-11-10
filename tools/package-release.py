"""Build a full or incremental ZIP from repository files; does not push or deploy."""
import argparse
import hashlib
import json
from pathlib import Path
import re
import zipfile

ROOT = Path(__file__).resolve().parents[1]
EXCLUDE = {'.git', 'node_modules', 'releases', '__pycache__', '.DS_Store', 'Thumbs.db'}

def inventory():
    result = {}
    for file in sorted(ROOT.rglob('*')):
        rel = file.relative_to(ROOT)
        if not file.is_file() or any(p in EXCLUDE for p in rel.parts):
            continue
        if rel.as_posix() == 'release-manifest.json' or file.suffix in {'.zip', '.log'}:
            continue
        result[rel.as_posix()] = hashlib.sha256(file.read_bytes()).hexdigest()
    return result

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--version', required=True)
    mode = parser.add_mutually_exclusive_group(required=True)
    mode.add_argument('--full', action='store_true')
    mode.add_argument('--baseline', type=Path)
    parser.add_argument('--output', type=Path)
    args = parser.parse_args()
    if not re.fullmatch(r'\d+\.\d+\.\d+(?:-[A-Za-z0-9.-]+)?', args.version):
        parser.error('Use a version such as 1.0.1')
    current_version = json.loads((ROOT / 'package.json').read_text('utf-8'))['version']
    if current_version != args.version:
        parser.error('Update package.json and CHANGELOG.md before packaging')
    previous = json.loads(args.baseline.read_text('utf-8')) if args.baseline else None
    files = inventory()
    old_files = previous['files'] if previous else {}
    changed = [p for p, h in files.items() if old_files.get(p) != h]
    deleted = sorted(set(old_files) - set(files))
    if previous and not changed and not deleted:
        parser.error('No changes found')
    if previous and previous['version'] == args.version:
        parser.error('Increment the version before creating an update')
    manifest = {'version': args.version, 'files': files}
    manifest_text = json.dumps(manifest, ensure_ascii=False, indent=2) + '\n'
    kind = 'full' if args.full else 'update'
    output = args.output or ROOT / 'releases' / f'game-art-observatory-v{args.version}-{kind}.zip'
    output = output.resolve()
    output.parent.mkdir(parents=True, exist_ok=True)
    if output.exists():
        parser.error(f'Output already exists: {output}')
    notes = [f'# 更新到 v{args.version}', '',
             f"适用基线：v{previous['version']}。" if previous else '首次完整交付。', '',
             '将包内文件按同名路径覆盖仓库；不要上传ZIP文件本身。修改摘要见 CHANGELOG.md。', '',
             '## 新增／替换文件', ''] + [f'- `{p}`' for p in changed]
    notes += ['', '## 删除文件', ''] + ([f'- `{p}`' for p in deleted] or ['无。'])
    notes += ['', '## 验证', '', '运行 `npm test`；发布前在浏览器检查主页、数量滑杆、名称显隐、悬停简介与全屏。',
              '自动检查不等同于真实浏览器或线上部署验证。', '']
    with zipfile.ZipFile(output, 'w', zipfile.ZIP_DEFLATED) as archive:
        for rel in changed:
            archive.write(ROOT / rel, rel)
        archive.writestr('release-manifest.json', manifest_text)
        if previous:
            archive.writestr('UPDATE.md', '\n'.join(notes))
    (ROOT / 'release-manifest.json').write_text(manifest_text, encoding='utf-8')
    print(json.dumps({'zip': str(output), 'version': args.version, 'changed': len(changed),
                      'deleted': deleted, 'bytes': output.stat().st_size}, ensure_ascii=False))

if __name__ == '__main__':
    main()
