import { toast } from 'react-toastify';
class ToastHelper {
  static error(msg: any): void {
    toast.error(msg, { position: toast.POSITION.TOP_RIGHT });
  }
  static success(msg: any): void {
    toast.success(msg, { position: toast.POSITION.TOP_RIGHT });
  }
}
export default ToastHelper;
