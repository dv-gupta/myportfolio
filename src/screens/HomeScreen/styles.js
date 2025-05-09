import {StyleSheet} from 'react-native';
import {Colors} from '../../common/constant';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  rowContainer: {
    flexDirection: 'row',
    height: 80,
    padding: 10,
  },
  circleContainer: {
    height: 75,
    width: 75,
    borderRadius: 35,
    backgroundColor: Colors.white,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userItemContainer: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 1,
  },
  imageViewContainer: {
    height: 80,
    width: 80,
    borderRadius: 45,
    backgroundColor: Colors.white,
    elevation: 5,
  },
  detailContainer: {
    flex: 8,
    padding: 5,
    justifyContent: 'flex-start',
    marginVertical: 4,
  },
  boldTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.textColor,
  },
  boldTimeStyle: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.grey,
  },
  badgeContainer: {
    backgroundColor: Colors.secondaryColor,
    height: 18,
    width: 18,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgContainer: {
    height: 22,
    width: 22,
    marginHorizontal: 4,
  },
  imgContainer_: {
    marginHorizontal: 4,
  },
  settingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: '35%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end', // Align the content to the bottom
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: Colors.backgroundColor,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 50,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
    flex: 1,
  },
  button: {
    height: 32,
    width: 32,
    borderRadius: 20,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  buttonClose: {
    backgroundColor: Colors.greylight,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: Colors.textColor,
    textAlign: 'center',
  },
  titleModalContainer: {flexDirection: 'row'},
  scrollContainer: {
    height: '100%',
    width: '100%',
  },
  profileContainer: {flexDirection: 'row', paddingHorizontal: 10},
  proImg: {height: 50, width: 50, borderRadius: 25, marginTop: 15},
  proImg1: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginTop: 25,
  },
  txtContainer: {backgroundColor: 'red', width: '100%', height: 20},
  nameTxtStyle: {fontSize: 14, color: Colors.textColor},
  imgMedalContaianer: {height: 20, width: 20, borderRadius: 10},
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: Colors.primaryColor,
  },
});
