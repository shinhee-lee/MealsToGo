# MealsToGo - 식당 찾기
React Native + Hook + Expo + JavaScript + Firebase

## 🖥 프로젝트 소개
위치 별 식당 정보를 알 수 있는 크로스 플랫폼 애플리케이션입니다.

## ⏲ 개발 기간
- 23.09.14 ~ 23.11.09

### ⚙ 개발 환경
- `React Native` `Hook`
- `Expo`
- `JavaScript`
- `Firebase API`
- 테스트 기기
  - `iPhone 11` `iOS 16` / `iPhone 15` `iOS 17`
  - `emulator API 34`

## 📽 데모 동영상

### 회원가입/로그인
|회원가입|로그인|
|:---:|:---:|
|![register-ezgif com-resize (1)](https://github.com/shinhee-lee/MealsToGo/assets/103517160/846ff973-e5b4-476b-b10d-60cbd236e700)|![login-ezgif com-resize (1)](https://github.com/shinhee-lee/MealsToGo/assets/103517160/a211a4a8-31af-48e3-8a8d-e797d993a8aa)|

### 식당
|열람|위치 검색|favourites|
|:---:|:---:|:---:|
|![seeresta-ezgif com-resize](https://github.com/shinhee-lee/MealsToGo/assets/103517160/04258e68-ff7c-4e6d-941e-2fa7cec341ba)|![searchresta-ezgif com-resize](https://github.com/shinhee-lee/MealsToGo/assets/103517160/b62c0820-7634-4e2d-a592-23659cf44c36)|![favresta-ezgif com-resize](https://github.com/shinhee-lee/MealsToGo/assets/103517160/5364d464-d35c-4c17-94a8-6f2de22f543b)|

### 지도
|위치 검색|식당 정보|
|:---:|:---:|
|![serachmap-ezgif com-resize](https://github.com/shinhee-lee/MealsToGo/assets/103517160/9ba07548-ac3a-4988-b87e-6fe9b0684f38)|![infomap-ezgif com-resize](https://github.com/shinhee-lee/MealsToGo/assets/103517160/c132e102-ab8e-4e8f-8860-a8970086e775)|

### 설정
|사용자 정보|Favourites|로그아웃|
|:---:|:---:|:---:|
|![settinguser-ezgif com-resize](https://github.com/shinhee-lee/MealsToGo/assets/103517160/1d2aa3f7-fa10-4ea2-8e31-5d488d663e0c)|![settingfav-ezgif com-resize](https://github.com/shinhee-lee/MealsToGo/assets/103517160/d72af737-7311-4562-a488-cfb4ac34251b)|![settinglogout-ezgif com-resize](https://github.com/shinhee-lee/MealsToGo/assets/103517160/808b2396-abf5-4af6-a55e-af39d8e1f194)|



## 📌 주요 기능
사용자 CRUD, 식당 찾기, Favourites 설정, 지도록 식당 위치 확인할 수 있습니다.

#### 로그인
- DB값 검증
- 실패 시 실패 문구 띄움  
  ![KakaoTalk_20240407_203104328-ezgif com-resize](https://github.com/shinhee-lee/MealsToGo/assets/103517160/8d52661f-12e9-450d-aa8d-0b3a6e45f4aa)

#### 회원가입
- 이메일 형식 확인  
  ![KakaoTalk_20240407_203104328_01-ezgif com-resize](https://github.com/shinhee-lee/MealsToGo/assets/103517160/5ff30674-811f-411d-b8b7-48529bcbdfa3)
- 회원가입 성공 시 바로 로그인

#### 식당 탭
##### 목록
- 식당 목록을 볼 수 있음
  - 식당 사진, 이름, 별점, 위치, 오픈 여부 등
##### 상세 정보 (열람)
- 식당 Card 터치 시 상세 정보 볼 수 있음
  - 식당 사진, 이름, 별점, 위치, 상세 정보, 메뉴
##### 검색
- 위치 검색 가능 (디폴트: 샌프란시스코)
- 위치 검색 시 해당 위치에 대한 주변 식당 노출
##### Favourites
- 식당 정보의 하트 버튼을 누르면 사용자의 favourites에 등록
- 검색창 옆 하트 버튼을 눌러 사용자의 favourites 확인 가능

#### 지도 탭
- 검색한 위치에 따른 식당들을 pin으로 보여줌
- pin을 터치하여 해당 식당의 간단한 정보(사진, 식당 이름)를 알 수 있음
  - 사진 터치 시 상세 정보로 이동

#### 설정 탭
- 사용자의 정보 알 수 있음
- Expo 카메라를 이용해 사용자의 프로필 사진 업로드 가능
- Favourites 목록 확인 가능
- 로그아웃 가능


## ❗ 개선 요소
- 언어를 한국어로 변경
- 식당 검색 가능
- google map api로 실제 데이터 활용
- 사용자 사진 수정 시 갤러리에서 가져오기
