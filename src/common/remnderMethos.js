import {Text, View, Pressable} from 'react-native';
import {styles} from '../screens/HomeScreen/styles';
import {Colors} from './constant';
import {navigationRef} from '../utils/RootNavigation';
import { useEffect, useState } from 'react';

const onClickChatList = selectedItem => {
  console.log('Selecte Item ', selectedItem);
  navigationRef.navigate('Chat', {
    room: `${selectedItem.groupName}`,
    roomData: selectedItem,
  });
};

let arra = [];

export const RenderItem = ({item, index,isEdit, selectedArray}) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const onCLickEdit = () => {
    const isSelected = selectedItems.some((selectedItem) => selectedItem._id === item._id);
    console.log("selectd ", isSelected)
    if (isSelected) {
      let data = arra.filter((sek)=>sek._id !== item._id)
      console.log(": in sele ", data)
      arra = data
      setSelectedItems((prev)=>
        prev.filter((selc)=>selc._id !== item._id)
      )
    } else {
      arra.push(item)
      setSelectedItems((prev)=> [...prev, item])
    }
  };

  useEffect(()=>{
    selectedArray(arra);
  },[selectedItems])

  // selectedArray = selectedItems;
  // console.log("selev ", selectedItems )

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {isEdit && <Pressable 
        style={styles.circle}
        onPress={onCLickEdit}
      >
      
        {selectedItems.some((selectedItem) => selectedItem._id === item._id) && (
            <View style={styles.checkedCircle} />
          )}
      </Pressable>}
      <Pressable
        onPress={() => onClickChatList(item)}
        key={index}
        style={styles.userItemContainer}>
        <View style={{flex: 3, padding: 5}}>
          <View style={styles.imageViewContainer} />
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.itemContainer}>
            <Text style={styles.boldTextStyle}>{item.groupName}</Text>
            <Text style={styles.boldTimeStyle}>12:10</Text>
          </View>
          {/* <View style={[styles.itemContainer, { marginVertical: 5 }]}>
            <View style={{ flex: 8 }}>
              <Text numberOfLines={1} style={styles.boldTimeStyle}>{item.description}</Text>
            </View>
            {item.unreadMsg != undefined && <View style={styles.badgeContainer}>
              <Text style={[styles.boldTimeStyle, { color: Colors.white }]}>{item.unreadMsg}</Text>
            </View>}

          </View> */}
        </View>
      </Pressable>
    </View>
  );
};
