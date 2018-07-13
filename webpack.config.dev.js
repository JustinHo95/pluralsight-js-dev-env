import path from 'path';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [ // địa chỉ truy cập để chuyển bó code mình viết đến
    path.resolve(__dirname, 'src/index')
    //__dirname giống như base trong php dùng để tạo 1 đường link đầy đủ tới route yêu cầu
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js' // file các bó code sẽ compile sang để nhúng vào html
  },
  plugins: [],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
