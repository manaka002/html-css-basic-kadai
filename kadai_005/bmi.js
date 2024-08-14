// 変数の宣言
  let weight;
  let height;

// 体重と身長を変数に代入
 weight = 70; // 体重 (kg)
 height = 1.75; // 身長 (m)

// BMIの計算
  let bmi = weight / (height * height);

// コンソールに結果を出力
  console.log('BMI計算結果');
  console.log('体重: ' + weight + ' kg');
  console.log('身長: ' + height + ' m');
  console.log('BMI: ' + bmi.toFixed(2));
