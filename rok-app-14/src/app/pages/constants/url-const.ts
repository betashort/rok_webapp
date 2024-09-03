export class UrlConst {
    static readonly SLASH = '/';
    static readonly PATH_SIGN_IN ='sign-in';
    static readonly PATH_RESULT_REGISTER_FORM = 'result-register-form';
    static readonly PATH_DASHBOARD = 'dashboard-page';
    static readonly PATH_RESOURCE_CALCULATOR = 'resource-calculator';
    static readonly PATH_SPEEDUP_CALCULATOR = 'speedup-calculator';
    static readonly PATH_AOO_REGISTER_PAGE = 'aoo-register';
    static readonly PATH_AOO_ADMIN_PAGE = 'aoo-admin-page'
}
export interface PageUrlPair{
    page: string,
    url: string
}
export const PAGEURLS: PageUrlPair[]= [
 { page: "ダッシュボード", url:"dashboard-page"},
 { page: "戦績登録", url: "result-register-form"},
 { page: "オシリス登録", url: "aoo-register"},
 { page: "オシリスチーム管理", url: "aoo-admin-page"}
]