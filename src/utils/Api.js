import {
  BASE_URL,
  GROUPS,
  USERS,
  MATERIALS,
  EQUIPMENT,
  SUBSCRIPTION,
  PAYMENT,
} from '../common/constant';

import axios from 'axios';

/**Material APi */
export const getAllMaterials = async () => {
  console.log(' getMaterial');
  try {
    return fetch(`${BASE_URL}/${MATERIALS}/getAllMaterials`, {
      method: 'GET', // or 'POST' or other methods
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers required by your API
      },
    }).then(res => {
      console.log(' getAllGroup res ', res);
      return res.json();
    });
  } catch (error) {
    console.log('get All Groupo data ', error);
  }
};

/**Equipment APi */
export const getAllEquipment = async () => {
  console.log(' getAllEquipment');
  try {
    return fetch(`${BASE_URL}/${EQUIPMENT}/getAllEquipment`, {
      method: 'GET', // or 'POST' or other methods
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers required by your API
      },
    }).then(res => {
      console.log(' getAllEquipment res ', res);
      return res.json();
    });
  } catch (error) {
    console.log('get All getAllEquipment data ', error);
  }
};

/**Users APi */
export const sendOtp = sendOtpObj => {
  try {
    return fetch(`${BASE_URL}/${USERS}/sendOTP`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sendOtpObj),
    })
      .then(res => {
        return res.json();
      })
      .catch(err => console.log('Error', err));
  } catch (error) {
    console.log('Error', err);
  }
};

export const verifiedOtp = verifiedOtpObj => {
  try {
    return fetch(`${BASE_URL}/${USERS}/verifyOTP`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(verifiedOtpObj),
    })
      .then(res => {
        return res.json();
      })
      .catch(err => console.log('Error', err));
  } catch (error) {
    console.log('Error', err);
  }
};

export const updateUserById = (userId, userObj) => {
  try {
    return fetch(`${BASE_URL}/${USERS}/updateUser/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObj),
    })
      .then(res => {
        return res.json();
      })
      .catch(err => console.log('Error', err));
  } catch (error) {
    console.log('Error', err);
  }
};

export const getAllUsers = async userId => {
  // console.log(" getAllUsers",userId);
  try {
    return fetch(`${BASE_URL}/${USERS}/getAllUsers/${userId}`, {
      method: 'GET', // or 'POST' or other methods
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers required by your API
      },
    }).then(res => {
      // console.log(" getAllUsers res ",res);
      return res.json();
    });
  } catch (error) {
    console.log('get getAllUsers data ', error);
  }
};

/**GrpChat APi */
export const getAllGroup = async () => {
  console.log(' getAllGroup');
  try {
    return fetch(`${BASE_URL}/${GROUPS}/getAllGroups`, {
      method: 'GET', // or 'POST' or other methods
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers required by your API
      },
    }).then(res => {
      console.log(' getAllGroup res ', res);
      return res.json();
    });
  } catch (error) {
    console.log('get All Groupo data ', error);
  }
};

export const getAllGroupByUserId = async userId => {
  // console.log(" getAllGroupByUserId",);
  try {
    return fetch(`${BASE_URL}/${GROUPS}/${userId}/getAllGroupsByUserId`, {
      method: 'GET', // or 'POST' or other methods
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers required by your API
      },
    }).then(res => {
      // console.log(" getAllGroup res ",res);
      return res.json();
    });
  } catch (error) {
    console.log('get All Groupo data ', error);
  }
};

export const getGroupMessageByGroupId = async grpId => {
  // try {
  //   console.log("roomId ", grpId)
  //   return await fetch(`${BASE_URL}/${GROUPS}/getGroupById/${grpId}`, {
  //     method: 'GET', // or 'POST' or other methods
  //     headers: {
  //       'Content-Type': 'application/json',
  //       // Add any other headers required by your API
  //     },
  //   }).then(res => {
  //     console.log(' getGroupMessageData res ', res);
  //     return res.json();
  //   }).catch((err)=>{
  //     console.log("error in catch ", err)
  //   });
  // } catch (error) {
  //   console.log(' getGroupMessageData error ', error);
  // }
 return await axios({
    method: 'get',
    url: `${BASE_URL}/${GROUPS}/getGroupById/${grpId}`,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
    
      return response.data;
    })
    .catch(err => {
      console.log('Error ', err);
    });
};

export const sendMessageByGroupId = async (grpId, sendMsgObj) => {
  console.log('Message daat ', sendMsgObj);
  // try {
  //   console.log("url ", `${BASE_URL}/${GROUPS}/${grpId}/messages`);
  //   return fetch(`${BASE_URL}/${GROUPS}/${grpId}/messages`, {
  //     method: 'POST', // or 'POST' or other methods
  //     headers: {
  //       'Content-Type': 'application/json',
  //       // Add any other headers required by your API
  //     },
  //     body: JSON.stringify(sendMsgObj),
  //   }).then(res => {
  //     console.log(' getGroupMessageData res ', res);
  //     return res.json();
  //   });
  // } catch (error) {
  //   console.log(' getGroupMessageData error ', error);
  // }
  try {
    console.log("url ", `${BASE_URL}/${GROUPS}/${grpId}/messages`);
    return fetch(`${BASE_URL}/${GROUPS}/${grpId}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers required by your API
      },
      body: JSON.stringify(sendMsgObj),
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle errors here
    });
  } catch (error) {
    console.error('Error:', error);
    // Handle synchronous errors here
  }
  
};

/** Subscription */
export const getSubscription = async () => {
  try {
    return fetch(`${BASE_URL}/${SUBSCRIPTION}/getAllSubscription`, {
      method: 'GET', // or 'POST' or other methods
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers required by your API
      },
    }).then(res => {
      // console.log(" getAllSubscription res ",res);
      return res.json();
    });
  } catch (error) {
    console.log('getAllSubscription error ', error);
  }
};

/**Add payment */
export const addPayment = async paymentObj => {
  console.log('payment ', paymentObj);
  try {
    return fetch(`${BASE_URL}/${PAYMENT}/addPayment`, {
      method: 'POST', // or 'POST' or other methods
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers required by your API
      },
      body: JSON.stringify(paymentObj),
    }).then(res => {
      console.log(' addPayment res ', res);
      return res.json();
    });
  } catch (error) {
    console.log(' addPayment error ', error);
  }
};

/**Image Upload API */
export const UploadAPI = async Obj => {
  console.log('payment ', Obj);
  try {
    return fetch(`${BASE_URL}/${UPLOAD}/upload`, {
      method: 'POST', // or 'POST' or other methods
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers required by your API
      },
      body: JSON.stringify(Obj),
    }).then(res => {
      console.log(' upload res ', res);
      return res.json();
    });
  } catch (error) {
    console.log(' upload error ', error);
  }
};
