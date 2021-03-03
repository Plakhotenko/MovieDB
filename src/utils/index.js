import Cookies from 'js-cookie'

export const isAuthorized = () => !!Cookies.get('session_id')
