/*
 * @Description:
 * @Date: 2020-07-11 16:47:59
 */
export enum MESSAGE {
  /**
   * 初始化
   */
  INIT_NPM,
  /**
   * 获取版本信息完成
   */
  FINISH_QUERY_PACKAGE,
  /**
   * 检测最新版本
   */
  CHECK_PACKAGES_LATEST,
  /**
   * 检测最新版本完成
   */
  FINISH_CHECK_PACKAGES_LATEST,
}
