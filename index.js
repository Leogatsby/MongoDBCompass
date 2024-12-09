const mongoose = require("mongoose");

// MongoDB 연결 URI
const mongoURI = "mongodb://127.0.0.1:27017/CompassExamples";

// MongoDB 연결
mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB에 성공적으로 연결되었습니다!"))
  .catch((err) => console.error("MongoDB 연결 오류:", err));

// 스키마 정의
const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String
});

// 모델 생성
const User = mongoose.model("User", UserSchema);

// 데이터 저장
const createUser = async () => {
  try {
    const user = new User({
      name: "홍길동",
      age: 26,
      email: "hong@example.com"
    });
    const savedUser = await user.save();
    console.log("데이터 저장 완료:", savedUser);
  } catch (err) {
    console.error("데이터 저장 실패:", err);
  }
};

// 데이터 실행
createUser();
