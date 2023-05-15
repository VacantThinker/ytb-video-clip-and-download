/**
 *
 * @param key_
 * @return {Promise<{value: boolean, key: string}>}
 */
export async function $brStorageGet(key_) {
  let obj = await browser.storage.local.get(key_);
  let key = Object.keys(obj)[0];
  let value = Object.values(obj)[0];
  return {key: key, value: value};
}

// async function $brStorageSet(key_, val_) {
//   let obj = {};
//   obj[key_] = val_;
//   await browser.storage.local.set(obj);
// }

export async function $brStorageInitialValue() {
  let objDefault = stoDefaultObj();
  for (const key_ of Object.keys(objDefault)) {
    let val_ = objDefault[key_];
    let obj = {};
    obj[key_] = val_;
    let find = await browser.storage.local.get(key_);
    if (Object.keys(find).length === 0) {
      await browser.storage.local.set(obj);
    }
  }
}

/**
 *
 * @return {{}}
 */
function stoDefaultObj() {
  let obj = {};
  // let keyList = stoKeyList;
  // obj[keyList.defaultquality] = stoDefaultValue.defaultqualityDefaultValue;
  //
  // // after download ok
  // obj[keyList.thumbnaildownload] = false;
  // obj[keyList.jumpToTheVideoADF] = false;
  // obj[keyList.openToTheVideoADF] = false;
  //
  // // notification
  // obj[keyList.notiStartDowning] = false;
  // obj[keyList.notiDownloadOk] = true;

  return obj;
}

export const stoDefaultValue = {
  // '1080p'
  defaultqualityDefaultValue: '1080p',
};
export const stoKeyList = {
  defaultquality: 'defaultquality',

  thumbnaildownload: 'thumbnaildownload',
  jumpToTheVideoADF: 'jumpToTheVideoADF',
  openToTheVideoADF: 'openToTheVideoADF',

  notiStartDowning: 'notiStartDowning',
  notiDownloadOk: 'notiDownloadOk'

};

