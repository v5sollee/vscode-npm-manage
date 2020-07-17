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

export const getPackageLastVersion = async (packageUrl: any): Promise<StringObject> => {
  console.log('开始检测最新版本,package.js地址:', packageUrl.fsPath);
  try {
    const result = await ncu.run({
      packageFile: packageUrl.fsPath,
      jsonUpgraded: true,
      // packageManager: 'npm',
      silent: true,
    });
    vscode.window.showInformationMessage('已获取最新版本');
    return result;
  } catch (error) {
    console.error(error);
    vscode.window.showErrorMessage('最新版本获取失败');
    return {};
  }
  // return new Promise((resolve, reject) => {
  //   ncu
  //     .run({
  //       packageFile: packageUrl.fsPath,
  //       jsonUpgraded: true,
  //       // packageManager: 'npm',
  //       silent: true,
  //     })
  //     .then((res) => {
  //       vscode.window.showInformationMessage('已获取最新版本');
  //       resolve(res);
  //     })
  //     .catch((error) => {
  //       vscode.window.showErrorMessage('获取最新版本失败');
  //       console.error(error);
  //       reject(error);
  //     });
  // });
};
