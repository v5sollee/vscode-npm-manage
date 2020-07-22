import type { PackageType } from '../interface';

import * as vscode from 'vscode';
import path from 'path';
import fs from 'fs';
import ncu from 'npm-check-updates';

import { readFilePromise } from '../utils/file';

/**
 * 查询模块版本
 * @param {object} deps 依赖信息
 * @param {string} dir 项目路径
 */
export const queryModuleVersion = async (deps: StringObject, dir: string): Promise<StringObject> => {
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
  return modules;
};

export const getPackageVersion = (_context: vscode.ExtensionContext, url: any) => {
  return readFilePromise(url.fsPath, 'utf-8').then(async (file) => {
    try {
      const data: PackageType = JSON.parse(file);
      const wordSpacePath = url.fsPath.replace('/package.json', '');
      if (data.dependencies) {
        data.dependencies = await queryModuleVersion(data.dependencies, wordSpacePath);
      }

      if (data.devDependencies) {
        data.devDependencies = await queryModuleVersion(data.devDependencies, wordSpacePath);
      }
      return data;
    } catch (error) {
      vscode.window.showErrorMessage(error);
      return;
    }
  });
};

/**
 * TODO 优化整个检测流程/移动提示信息
 * @description: 检测package.json依赖的最新版本
 * @param packageUrl {string} package.json文件地址
 * @return: 与最新版本不相同的所有依赖
 */
export const getPackageLastVersion = (packageUrl: vscode.Uri): Promise<StringObject> => {
  return new Promise((resolve, reject) => {
    ncu
      .run({
        packageFile: packageUrl.fsPath,
        jsonUpgraded: true,
        packageManager: 'npm',
        silent: true,
      })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        console.error(`error`, error);
        reject(error);
      });
  });
};
