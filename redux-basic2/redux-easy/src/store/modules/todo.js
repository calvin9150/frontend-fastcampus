// dispatch : 액션 불러온다
// 리듀서 > 스토어

// 원하는 행동, 데이터 변화를 액션으로 할당

// 액션 타입 (문자열)
const CREATE = "todo/CREATE"; // 할 일 목록 추가하는 액션 (위치/액션명)
const DONE = "todo/DONE"; // 할 일 목록 중에서 완료 처리 하는 것

// 액션 생성 함수
// 여러종류 데이터를 품고있을 때 payload 라고 한다
export function create(payload) {
  return {
    type: CREATE,
    payload,
  };
}

export function done(key) {
  return {
    type: DONE,
    key,
  };
}

// 초기상태

const initState = {
  list: [
    {
      id: 0,
      text: "허리 펴기",
      done: true,
    },
    {
      id: 1,
      text: "물 마시기",
      done: false,
    },
  ],
};

// function 리듀서 (state, action){ return 상태변경}
// 리듀서 : 스코어 변경
export default function todo(state = initState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        list: state.list.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
      };
    case DONE:
      return {
        ...state,
        list: state.list.map((item) => {
          return item.id === action.id ? { ...item, done: true } : item;

          //   if (item.id === action.id) {
          //     return {
          //       ...item,
          //       done: true,
          //     };
          //   } else {
          //     return item;
          //   }
        }),
      };
    default:
      return state;
  }
}
