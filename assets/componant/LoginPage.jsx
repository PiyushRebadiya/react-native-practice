import React, { useState } from 'react'
import { View, Text,StyleSheet,TextInput,TouchableOpacity,Button} from 'react-native'

const LoginPage = () => {
    const [loginObj, setLoginObj] = useState({})

    const validate = () => {
        if (!loginObj.username) {
            alert('username required!');
            return false
        } else if (!loginObj.password) {
            alert('password required!');
            return false
        }
        return true
    }
    const submitHandler = () => {
        if (validate()) {
            alert('login successfully....');
        }
    }

  return (
      <View style={styles.bg}>
          {/* <View> */}
          <Text style={{fontSize:30,color:"red"}}>Login <Text style={{color:"green"}}>Page</Text></Text>
              <TextInput placeholder="Enter the user name" style={{height:50,width:"80%",borderBottomWidth:1}} onChangeText={(value) => setLoginObj({...loginObj,username:value})} />
          {/* </View> */}
          {/* <View> */}
              <TextInput placeholder="Enter the password" style={{height:50,width:"80%",borderBottomWidth:1}} onChangeText={(value) => setLoginObj({...loginObj,password:value})}/>
          {/* </View> */}
          {/* <View> */}
          <TouchableOpacity style={{marginTop:25,width:"30%"}}>
                <Button title="Login" onPress={() => submitHandler()}></Button>
          </TouchableOpacity>
          {/* </View> */}
      </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: "#fff",
      // alignItems: "center",
      // justifyContent: "center",
    },
    font: {
      color: "blue"
    },
    bg: {
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",
    },
    icon: {
      color: "white",
      padding: "5%"
    }
  });

export default LoginPage

