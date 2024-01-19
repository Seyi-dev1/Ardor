import { takeLatest, call, all } from "redux-saga/effects";
import { handleDeposit } from "../firebase/firebase.utils";

export function* depositHandler({ payload }) {
  const { user } = payload;

  try {
    yield call(handleDeposit, user, payload);
    console.log("done");
  } catch (error) {
    console.log(error);
  }
}

export function* onPaymentStart() {
  yield takeLatest("payment/paymentStart", depositHandler);
}

export function* paymentSagas() {
  yield all([call(onPaymentStart)]);
}
