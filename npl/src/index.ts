import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-cpu";
import "@tensorflow/tfjs-backend-webgl";
import * as use from "@tensorflow-models/universal-sentence-encoder";

async function run() {
  // モデルをロードする
  const model = await use.load();

  // 文章をベクトル化する
  const sentence = "Hello, world!";
  const embeddings = await model.embed(sentence);

  // ベクトルをコンソールに出力する
  embeddings.print();
  console.log("fsddddddddh");
  console.log("Hello, TypeScript");
  console.log("こんばんは！"); // 追加
}

run();
console.log("x");
