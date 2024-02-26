let toastMsg = "";

export default {
  changeMsg(msg) {
    toastMsg = msg;
  },
  getToastMsg() {
    return toastMsg;
  },
};
