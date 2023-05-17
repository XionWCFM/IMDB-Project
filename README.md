#IMDB Project

Next.js와 tailwind를 이용해 간단한 웹 애플리케이션을 구성해본 프로젝트입니다.

기초적인 라우팅과 반응형 웹 구현 및 get 요청까지만 구현해보았습니다.


<img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"> <img src="https://img.shields.io/badge/Nextjs-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">


---


# 배포링크입니다.

https://imdb-project-v3.vercel.app/


# 시연화면입니다.

![시연화면](https://github.com/XionWCFM/IMDB-Project/assets/101111364/519edd40-90a8-42bf-8c54-74825898867f)

간단한 작

# 폴더 구조

```
IMDB-Project
├─ .eslintrc.json
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ favicon.ico
│  ├─ next.svg
│  ├─ spinner.svg
│  ├─ thirteen.svg
│  └─ vercel.svg
├─ README.md
├─ src
│  ├─ app
│  │  ├─ about
│  │  │  └─ page.jsx
│  │  ├─ error.jsx
│  │  ├─ globals.css
│  │  ├─ layout.jsx
│  │  ├─ loading.jsx
│  │  ├─ movie
│  │  │  └─ [id]
│  │  │     └─ page.jsx
│  │  ├─ page.jsx
│  │  ├─ page.module.css
│  │  ├─ Providers.jsx
│  │  └─ search
│  │     └─ [searchTerm]
│  │        └─ page.jsx
│  ├─ components
│  │  ├─ Card.jsx
│  │  ├─ DarkModeSwitch.jsx
│  │  ├─ Header.jsx
│  │  ├─ MenuItem.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ NavbarItem.jsx
│  │  ├─ Results.jsx
│  │  └─ SearchBox.jsx
│  └─ pages
│     └─ api
│        └─ hello.js
└─ tailwind.config.js

```


# 기능 명세

1. DarkMode

```ts
import { ThemeProvider } from 'next-themes';

```


next-themes 라이브러리가 제공하는 ThemeProvider를 이용해 구현했습니다.

간단하게 다크 모드를 지원하도록 할 수 있는 라이브러리여서 도입하게 되었습니다.

tailwindcss가 제공하는 기능만 활용해서도 충분히 다크모드를 구현할 수 있었지만

사용법이 간단하여 개발시간을 단축할 수 있을 것 같다는 생각이 들었습니다.

```ts
    <ThemeProvider enableSystem={true} attribute="class">
      <div className=" min-h-screen select-none text-gray-700 transition-colors duration-300 dark:bg-gray-700 dark:text-gray-200">
        {children}
      </div>
    </ThemeProvider>
```
여타 Provider 이름을 가진 컴포넌트들과 같이

칠드런을 감싸주는 형태로 작성하면 됩니다.

`enableSystem`은 true를 주게되면 기본 System의 다크모드를 설정 값을 사용한다는 의미가 됩니다.

`window.matchMedia('(prefers-color-scheme: dark)`와 비슷한 역할을 한다고 볼 수 있겠네요!

attribute는 다크모드를 class로 사용할것을 명시해준 것입니다.

이는 tailwind.config.js에서 darkmode에 대한 설정을 class 혹은 media 둘 중 하나로 설정할 수 있는 것과 유사합니다.



2. Next Image , Link

```js
import Image from 'next/image';
import Link from 'next/link';
```

`next` 자체적으로 `Link` 컴포넌트와 `Image` 컴포넌트를 제공합니다.

그런데 이 `Link` 컴포넌트는 빌드 이후 `a` 태그로 변하게되는데 왜 그냥 a태그를 사용하지 않는 것일까요?

[Link 컴포넌트는 어떻게 흰 화면을 보여주지 않을 수 있을까?](https://xionwcfm.tistory.com/289)

라는 호기심에서 시작하여 포스트를 작성했습니다.


`Image` 컴포넌트 역시 특이한 점이 있습니다. 바로 `required` 되는 `attribute`가 있다는 것인데요

`src`는 요구되는게 당연히 예상되지만 `Image` 컴포넌트는 추가로 `width` , `height` 속성을 요구합니다.

```ts
      <Image
        src="/profile.png"
        width={500}
        height={500}
        alt="Picture of the author"
      />
```

이런식으로요!

Next/Image는 다양한 기능을 편리하게 제공하니 꼭 참고해보시면 좋겠습니다.

[Next/Image에 대해 얼마나 알아?](https://velog.io/@joy37/NextImage%EC%97%90-%EB%8C%80%ED%95%B4-%EC%96%BC%EB%A7%8C%ED%81%BC-%EC%95%8C%EC%95%84)

[Next/Image를 활용한 이미지 최적화](https://fe-developers.kakaoent.com/2022/220714-next-image/)



3. error.js , loading.js

[error.js](https://nextjs.org/docs/app/api-reference/file-conventions/error)

[loading.js](https://nextjs.org/docs/app/api-reference/file-conventions/loading)

`next.js`는 특별한 이름을 가진 파일들에게 역할을 부여해줍니다.

이름에서도 예상할 수 있듯이 `error.js`는 에러 상황에서 보여주게될 컴포넌트입니다.

또한 `loading.js`는 마찬가지로 로딩 상황에 보여주게되는 컴포넌트입니다.


특이한 점은 구현된 방법에 있는데요

`loading.js`는 `Suspense`를 기반으로 즉시 로딩 상태를 생성한다고 설명합니다.

`Suspense`는 react v16 정도를 기점으로 추가된 기능이기도 한데 이에 대해서도 재미있는 레퍼런스가 많습니다.

[나머지 사람들을 위한 대수적 효과 - Dan Abramov](https://overreacted.io/algebraic-effects-for-the-rest-of-us/)

제가 추천하는 글입니다!

또한 이 `loading.js`는 기본적으로는 서버 컴포넌트이지만 use Client 지시문을 통해 클라이언트 컴포넌트로도 사용할 수 있다는 특징이 있답니다!
