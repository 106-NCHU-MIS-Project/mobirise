# 動物認領養 API
Source : 
> http://data.coa.gov.tw/Query/ServiceDetail.aspx?id=177  

API URL : 
> http://data.coa.gov.tw/Service/OpenData/AnimalOpenData.aspx  

## 使用欄位 ()
|編號|標籤名稱|標簽說明|
|----|----|----|
|02|animal_subid|如API Doc 2-23|
|06|animal_kind|動物類型(`貓`、`狗`、`鳥`...)|
|07|animal_sex|動物性別(`M`.`F`.`N`)(公、母、未輸入)|
|08|animal_bodytype|動物體型(`MINI`.`SMALL`.`MEDIUM`.`BIG`)(迷你、小型、中型、大型)|
|09|animal_colour|動物毛色(`白色`、`黑色`、`棕色`、`黃色`、`虎斑`、`花色`)|
|10|animal_age|動物年紀(`CHILD`.`ADULT`)|
|11|animal_sterilization|是否絕育(`T`.`F`.`N`)|
|12|animal_bacterin|是否施打狂犬病疫苗(`T`.`F`.`N`)|
|15|animal_status|動物狀態(`NONE`.`OPEN`.`ADOPTED`.`OTHER`.`DEAD`)(未公告、開放認養、已認養、其他、死亡）|
|22|shelter_name|收容所名稱|
|24|album_file|圖片|
|28|shelter_address|地址|
|29|shelter_tel|連絡電話|  

## Usage
`http://data.coa.gov.tw/Service/OpenData/AnimalOpenData.aspx?$top={top}&$skip={skip}&$filter={filter}`