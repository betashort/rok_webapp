export class Urls {
    static readonly SLASH = '/';
    static readonly PATH_SIGN_IN = 'sign-in';
    static readonly PATH_LOGIN = 'login';
    static readonly PATH_RESULT_REGISTER_FORM = 'result-register-form';
    static readonly PATH_DASHBOARD = 'dashboard-page';
    static readonly PATH_RESOURCE_CALCULATOR = 'resource-calculator';
    static readonly PATH_SPEEDUP_CALCULATOR = 'speedup-calculator';
    static readonly PATH_AOO_REGISTER = 'aoo-register';
    static readonly PATH_AOO_TEAMBOARD = 'aoo-teamboard';
    static readonly PATH_ADMIN = 'admin-page'
    static readonly PATH_KVK_REGISTER = 'kvk-register'
}

export interface IPageUrlPair {
    page: string;
    url: string;
}

export const PAGEURLS: IPageUrlPair[] = [
    {page: 'ログイン', url:"login"},
    {page: 'ダッシュボード', url:"dashboard-page"},
    {page: 'オシリス登録', url: 'aoo-register'},
    {page: 'オシリスチームボード', url: 'aoo-teamboard'},
    {page: '管理者ページ', url: 'admin-page'},
    {page: 'KVK戦力登録ページ', url: 'kvk-register'}
]