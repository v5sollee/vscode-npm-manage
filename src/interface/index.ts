import { Module } from 'webpack';

export interface ModauleType {
  name: string;
  version: string; // 当前版本
  latestVersion: string; // 最新版本
  allVersion: Array<string>; // 历史版本
  homepage: string; // npm 主页
  [key: string]: any;
}
export interface PackageType {
  name: string;
  version: string;
  description: string;
  main: string;
  scripts: StringObject;
  devDependencies: StringObject;
  dependencies: StringObject;
  devDependenciesInfo: Array<ModauleType>;
  dependenciesInfo: Array<ModauleType>;
}
