import type { PackageType, ModauleType } from '../interface';
import { execSync } from 'child_process';

import * as vscode from 'vscode';
import path from 'path';
import fs from 'fs';

import { readFilePromise } from '../utils/file';

/**
 * 查询模块版本
 * @param {object} deps 依赖信息
 * @param {string} dir 项目路径
 */
export const queryModuleVersion = (deps: StringObject, dir: string): StringObject => {
  let modules: StringObject = {};
  for (let key in deps) {
    try {
      let file = fs.readFileSync(path.join(dir, 'node_modules', key, 'package.json'), 'utf-8');
      let info = JSON.parse(file);
      modules[key] = info.version;
    } catch (e) {
      modules[key] = '';
    }
  }
  console.log('modules:', modules);
  return modules;
};

export const queryModuleAllVersion = (_module: StringObject) => {
  // for (let key in module) {
  //   try {
  //     const versions = execSync(`npm view ${key} version`);
  //     console.log('versions:', versions);
  //   } catch (error) {
  //     console.log('获取全部版本失败');
  //   }
  // }
};

export const getPackageVersion = (_context: vscode.ExtensionContext, url: any) => {
  readFilePromise(url.fsPath, 'utf-8').then((file) => {
    try {
      const data: PackageType = JSON.parse(file);
      const wordspacePath = url.fsPath.replace('/package.json', '');
      if (data.dependencies) {
        data.dependencies = queryModuleVersion(data.dependencies, wordspacePath);
      }

      if (data.devDependencies) {
        data.devDependencies = queryModuleVersion(data.devDependencies, wordspacePath);
      }
    } catch (error) {
      vscode.window.showErrorMessage('package.json 文件损坏');
    }
  });
};
