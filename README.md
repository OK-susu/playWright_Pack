# playWright_Pack
Scraping using a single exe file

# Notice
Node을 활용한 playWright 실행파일으로 각 타깃페이지의 데이터를 스크랩해오는 파일을 실행

# Folder & File
File_js - 타깃페이지에서 데이터를 스크랩하는 파일 폴더
node_modules - playWright 구성 폴더
PlayWrightPack.exe - 단일 실행 파일
parameter 값 - base64로 Encode된 값으로 사용 ex) PlayWrightPack.exe eyJGaWxlTmFtZSI6IkdvbGQiLCAiam9iTmFtZSI6IkdvbGRQcmljZUFnZSJ9
chromium.exe - 사용자 pc에 chromium-1005 자동설치

# input 구조 (json obJect) 
| key | Type | note |
| --- | --- | --- |
| FileName | String | 실행js파일이름 |
| jobName | String | 실행js에서 메서드 이름 |
| autoClose | boolean | 실행 후 브라우저 자동 종료 유무 deFault: false |
| IsMaxSize | boolean | 브라우저 창 최대화 유무 deFault: false  |

# output 구조 (json obJect) 
| key | Type | note |
| --- | --- | --- |
| ErrorCode | String | 실행결과 에러코드 |
| ErrorMsg | String | 에러일 경우 메시지 |
| Result | Array | 스크래핑 결과 Array |

# ErrorCode 종류
| ErrorCode | Msg | note |
| --- | --- | --- |
| 8000F100 | Not Valid Json Format | parameter로 넘어온 값이 json 형식이 아닌경우 |
| 8000F200 | parameter Null | parameter 빈값 |
| 8000FFFF | UnKnown Error | 그 외 Except|
| 00000000 | - | 성공 |
