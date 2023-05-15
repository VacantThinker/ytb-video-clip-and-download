/**
 *
 * @param tabIds{number| [number]}
 * @return {Promise<void>}
 */
export async function $brTabRemove(tabIds) {
  try {
    if (tabIds) {
      await new Promise(res => setTimeout(res, 12));
      await browser.tabs.remove(tabIds);
    }
  } catch (e) {

  }
}