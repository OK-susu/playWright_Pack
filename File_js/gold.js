//[1.0.0.0]
function gold(){};

gold.prototype.GoldPriceAge = async (chromium, input_Json) => {
  const common_Result = require(__dirname + "/common_Result.js");

  let IsMaxSize = false;  
  let autoClose = false;

  var json = JSON.parse(input_Json);    
  IsMaxSize = json['IsMaxSize'];
  autoClose = json['autoClose'];

  try {
    const browser = await chromium.launch(IsMaxSize ? { headless: false, args: ['--start-maximized'] } : { headless: false, args: ['--start-minimized'] });

    const context = await browser.newContext({      
      viewport: null
    });

    const page = await context.newPage();
    page.bringToFront();

    //1. 페이지 닫으면 node도 닫히게
    page.on('close', () => {
      console.log('page closed');
      context.close();
      browser.close();
    });
    browser.on('disconnected', () => { console.log('browser is closed') });

    let Result_array = [];
    let Result_Json = {};
    let i = 0;
    let Total_Count = 0;

    await page.goto('https://www.koreagoldx.co.kr/main/html.php?agencyCode=&htmid=goods/gold_list.html');

    while (true) {
      let _items = await page.$$eval('[class="tabulator-cell"]', (items) => items.map(items => items.textContent));
      i = 0;
      
      while (i < _items.length) {
        Result_Json.고시날짜 = _items[i];
        Result_Json.살때_순금 = _items[i + 1];
        Result_Json.팔때_순금 = _items[i + 2];
        Result_Json.팔때_18k = _items[i + 3];
        Result_Json.팔때_14k = _items[i + 4];
        Result_array.push(Result_Json);
        Result_Json = {};

        i += 5;
        Total_Count++;
      }
      
      const nextPageState = await page.locator('[title="Next Page"]').isDisabled();
      if (!nextPageState) {
        await page.locator('[title="Next Page"]').click();
        await page.waitForURL('https://www.koreagoldx.co.kr/main/html.php?agencyCode=&htmid=goods/gold_list.html');
      } else {
        break;
      }            
    } 

    autoClose == true ? await page.close() : "";
    return common_Result.prototype._Result("00000000", Result_array);
    
  } catch (error) {
    console.log('[X] ' + error);
    return common_Result.prototype._Result("8000FFFF", "");
  }
};

module.exports = gold;