import { StoreSessionService } from "../../core/service/store-session.service";

export class Urls {
    static readonly SLASH = '/';
    static readonly PATH_LOGIN = 'login';
    static readonly PATH_SIGN_UP = 'sign-up';
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
    role: string;
}

export const PAGEURLS: IPageUrlPair[] = [
    {page: 'ログイン', url:"login", role:""},
    {page: 'ダッシュボード', url:"dashboard-page", role:""},
    {page: 'オシリス登録', url: 'aoo-register', role: ""},
    {page: 'オシリスチームボード', url: 'aoo-teamboard', role:"admin"},
    {page: '管理者ページ', url: 'admin-page', role:"admin"},
    {page: 'KVK戦力登録ページ', url: 'kvk-register', role:""}
]