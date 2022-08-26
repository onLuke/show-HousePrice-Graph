const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniSccExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const webpack = require("webpack");

const prod = process.env.NODE_ENV === 'production';

module.exports = {
  mode: prod ? 'production' : 'development',
  //배포용일 경우 최적화가 적용된다.
  devtool: prod ? 'hidden-source-map' : 'eval',
  //배포용일 경우와 아닐 경우에 따라 다른 tool을 사용한다
  entry: "./src/index.tsx",
  //웹팩이 파일을 읽어들이기 시작하는 파일
  //엔트리의 값이 되는 객체의 프로퍼티 개수만큼 파일이 생성되며,
  //각 엔트리 포인트마다의 값을, 여러 파일을 담은 배열로 줄 경우, 해당 엔트리 포인트에 명시된 원소 파일들이 합쳐진다.
  //예를 들어, vender: ['@babel/polyfill', ...] 형식으로 쓰면 바벨 폴리필이 적용된 파일을 vendor.js로 묶어서 반환해준다.
  
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    //사용할 파일 확장자명을 기재한다
  },

  optimization:{
    minimize: false
    //optimization 값을 주지 않으면 기본적으로 코드 용량이 최소화된다.
    //최종본은 값을 주지 않고 default로 한다.
    //개발 단계에서는 false로 하여 확인이 용이하게 한다.
  },
  
  output : {
      path : path.resolve(__dirname, "dist"),
      filename: 'main.js'
      //만약 값을 [name].js 로 줄 경우, entry의 값이 된 객체의 key값이 name에 대입된다.
      //[hash].js 로 줄 경우, 매 번 랜덤한 문자열을 붙여 export한다. 캐시를 삭제할 때 유용하게 쓸 수 있다.
  },

  devServer: {
    historyApiFallback: true,

    static: "./dist",
    hot: true,
    //dist 파일에 업데이트가 발생할 때 마다 런타임에 모듈을 업데이트 한다.
    port: 3000,
    proxy: {
      '/api': 'domain.com'
      //프록시 서버를 두어 API 호출 시 도메인 다름으로 인해 발생하는 CORS에러를 방지한다.
    }
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', "ts-loader"],
        //tsx파일을 읽을 때 사용 할 loader를 지정한다.
      },
      {
        test: /\.css$/,
        use: [MiniSccExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(jpg|gif|ico|png)$/,
        use: ['file-loader']
      }
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(), 
    // 웹팩 실행시마다 dist 폴더 정리
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      //HTML 파일에 웹팩 적용
    }),
    new MiniSccExtractPlugin({
      filename: "common.css",
      //외부 css파일 export
    }),
  ],

};