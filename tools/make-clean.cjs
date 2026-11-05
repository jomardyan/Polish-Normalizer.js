// Copyright (c) 2026 Hayk Jomardyan - Lolisoft. Repository license applies.
const fs = require('node:fs');
const path = require('node:path');
const {execFileSync} = require('node:child_process');
const root = path.resolve(__dirname, '..');
const tracked = new Set(execFileSync('git', ['ls-files', '-z'], {cwd:root, encoding:'utf8'}).split('\0'));
const files = fs.readdirSync(root).filter(name => /^polish-normalizer-[0-9][A-Za-z0-9.+-]*\.tgz$/.test(name));
for (const name of files) if (tracked.has(name) || !fs.lstatSync(path.join(root,name)).isFile()) throw new Error('Refusing source or non-file: '+name);
for (const name of files) fs.unlinkSync(path.join(root,name));
