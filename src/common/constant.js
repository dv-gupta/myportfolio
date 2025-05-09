import { getTimeMeasureUtils } from "@reduxjs/toolkit/dist/utils";
import IconsFeather from "react-native-vector-icons/Feather";

// export const BASE_URL = 'http://192.168.1.38:8080';//OFFICE
// export const BASE_URL = 'http://192.168.1.22:8080'; //OFFICE
// export const BASE_URL = 'http://192.168.3.104:8080';
// export const BASE_URL = 'http://192.168.1.39:8080'; //HOME
export const BASE_URL = 'http://192.168.1.36:8080'; //HOME
// export const BASE_URL = 'http://172.20.10.2:8080';//HOME
// export const BASE_URL = 'http://192.168.1.44:8080';
// export const BASE_URL = 'http://localhost/:3000';
export const SOCKET_URL = 'http://192.168.1.39:4000';

// export const SOCKET_URL = 'http://192.168.1.38:4000'; //OFFICE

 // export const SOCKET_URL = 'http://172.20.10.2:4000'; //HOME
// export const SOCKET_URL = 'http://192.168.1.22:4000'; //OFFICE
export const USERS = 'api/users';
export const EQUIPMENT = 'api/equipment';
export const MATERIALS = 'api/materials';
export const GROUPS = 'api/groups';
export const SUBSCRIPTION = 'api/subscriptions';
export const PAYMENT = 'api/payments';
export const UPLOAD = 'api/images';

export const ROZAR_TEST_KEY = 'rzp_test_dWgB9IQIg11WL5';

// key_id:'rzp_test_dWgB9IQIg11WL5',
// key_secret:'RYMPvbPR0RnviXUJfbhG0TUc'

export const img_path =`${BASE_URL}/public/uploads/tiggi.jpeg`


export const Colors = {
  primaryColor: '#0D47A1',
  secondaryColor: '#1565C0',
  textColor: '#000000',
  white: '#FFFFFF',
  green: 'green',
  backgroundColor: '#f5f5f5',
  borderColor:'#ece5dd',
  grey:'#808080',
  unreadColor:'#2E2EFF',
  greyshade:'#999',
  greylight:'#e1e2e3',
  greyshadeN:'#666',
  greenshade:'#1DB954'

};

export const Images = {
  Logo: require('../assets/images/Logo.jpg'),
  backIcon: require('../assets/images/backIcon.png'),
  moreIcon: require('../assets/images/more.png'),
  plusIcon: require('../assets/images/plus.png'),
  cameraIcon: require('../assets/images/camera.png'),
  closeIcon: require('../assets/images/close.png'),
  usersIcon: require('../assets/images/users.png'),
  checkIcon: require('../assets/images/check.png'),
  checkedIcon: require('../assets/images/checked.png'),
  uncheckedIcon: require('../assets/images/unchecked.png'),
  goldmIcon: require('../assets/images/medal.png'),
  deleteIcon: require('../assets/images/delete.png'),
  contractor: require('../assets/images/employee.png'),
  labour: require('../assets/images/labour.png'),
  electricmaterial: require('../assets/images/electricmaterial.png'),
  materials: require('../assets/images/materials.png'),
  pipe: require('../assets/images/pipe.png'),
  tiles: require('../assets/images/tiles.png'),
  jcb: require('../assets/images/jcb.png'),
  lamp: require('../assets/images/lamp.png'),
  tilesHome: require('../assets/images/tilesHome.png'),
  homeplumbing: require('../assets/images/homeplumbing.png'),
  constractorlogo:require("../assets/images/engineer.png"),
  constructionworker:require("../assets/images/constructionworker.png"),
  electricworker:require("../assets/images/electricalengineer.png"),
  plumberworker:require("../assets/images/plumber.png"),
  tilesworker:require("../assets/images/Tilesworker.png")
};


export const IconFeather =({name})=>{
  return(
    <IconFeather  />
  );
}

export const messageIdGenerator = () => {
  // generates uuid.
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    let r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};