import React,{Component}from 'react'
import {StyleSheet,View,Text,Alert,Image,
    TouchableOpacity,Picker,ScrollView,TextInput} from 'react-native'

    import {
        widthPercentageToDP as wp,
        heightPercentageToDP as hp,
        listenOrientationChange as loc,
        removeOrientationListener as rol
      } from 'react-native-responsive-screen'

import {consistuencies,county_options} from './picker_option'
import { CustomPicker } from 'react-native-custom-picker'
import Loader from './Loader'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

class Post extends Component{
        constructor(props){
            super(props)
            this.state={
                isloading:false,
                phone:'',
                picker_value:'254',
                Fullnames:'',
                ward:'',
                constituency:'',
                comment:'',
                image:null

            }
        }
        componentDidMount() {
            this.getlibPermissionAsync()
            this.getcamPermissionAsync()
          }
          getlibPermissionAsync = async () => {
              const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
              if (status !== 'granted') {
                Alert.alert('Sorry, we need camera roll permissions to make this work!')
              }

          }
          getcamPermissionAsync = async () => {
              const { status } = await Permissions.askAsync(Permissions.CAMERA)
              if (status !== 'granted') {
                Alert.alert('Sorry, we need camera permissions to make this work!')
              }

          }
        on_submit(){
            this.setState({isloading:true})

            Alert.alert('Details captured Thank you!')

            this.setState({isloading:false})
        }
        selectPicture = async () => {
            // await Permissions.askAsync(Permissions.CAMERA_ROLL)
            let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
              aspect: [1,1],
              allowsEditing: true,
              
            })
            console.log(result)
            if (!result.cancelled) {
                this.setState({ image: result.uri })
            }
          }
        
          takePicture = async () => {
            // await Permissions.askAsync(Permissions.CAMERA)
            let result = await ImagePicker.launchCameraAsync({
              allowsEditing: false,
            })

            console.log(result)
            if (!result.cancelled) {
                this.setState({ image: result.uri })
            }
          }
        

    render(){
        return (
            <View style={styles.container}>
            <Loader isloading={this.state.isloading}/>
               {/* <ImageBackground
                   source={require('./assets/bgx.jpg')}
                   style={styles.img_container}
               > */}
                <View style={styles.holder}>
               <ScrollView style={styles.scroll}>
   
   
            
               <View>
              
   
                   <TouchableOpacity style={styles.pick_btn}>
                         <Picker
                         selectedValue={this.state.picker_value}
                                       style={styles.picker_phone}
                                       onValueChange={(itemValue, itemIndex) =>
                                           this.setState({picker_value: itemValue})
                                       }>
                                       <Picker.Item label="+254" value="254"/>
                                       <Picker.Item label="+255" value="255" />
                                       <Picker.Item label="+256" value="256" />
                                       <Picker.Item label="+1" value="1" />
                                       <Picker.Item label="+7" value="7" />
                                       <Picker.Item label="+91" value="91" />
                                       
   
                         </Picker>
                    </TouchableOpacity>
                    <Text  style={styles.inputlabel}>phone number (Nambari ya simu):</Text>
   
                       <TextInput 
                          style = {styles.phone_input}   
                           returnKeyType="go" 
                           placeholder='Nambari ya simu'
                           keyboardType='numeric'
                           maxLength={9}
                           value={this.state.phone}
                           placeholderTextColor='#7E807F' 
                        //    onFocus={()=> this.setState({clear_err:true})}
                           onChangeText={(phone) => this.setState({phone})}
                           />
                       
    
                  </View>
                <Text  style={styles.inputlabel}> Full Names:</Text>
                <TextInput 
                          style = {styles.input}   
                           placeholder='Jina Kamili' 
                           keyboardType='default'
                           value={this.state.Fullnames}
                           placeholderTextColor='#7E807F' 
                        //    onFocus={()=>this.setState({clear_err:true})} 
                           onChangeText={(val) => this.setState({Fullnames:val})}
                           />
   
                    <Text  style={styles.inputlabel}>County (Kaunti):</Text>
                    
                    <CustomPicker
                        style={styles.picker}
                        placeholder={'select  county'}
                        getLabel={item => item.label}
                        options={county_options}
                        // onValueChange={value =>{ this.setState({listing_option:value.value})}}

                    />

              
              <Text  style={styles.inputlabel}>Constituency (Eneo bunge):</Text>
                 <TextInput 
                          style = {styles.input}   
                           placeholder='Eneo Bunge...' 
                           keyboardType='default'
                           value={this.state.constituency}
                           placeholderTextColor='#7E807F' 
                        //    onFocus={()=>this.setState({clear_err:true})} 
                           onChangeText={(val) => this.setState({constituency:val})}
                           />

              <Text  style={styles.inputlabel}>Ward (wadi):</Text>
                        <TextInput 
                                    style = {styles.input}   
                                    placeholder='Ward....' 
                                    keyboardType='default'
                                    value={this.state.ward}
                                    placeholderTextColor='#7E807F' 
                                    //    onFocus={()=>this.setState({clear_err:true})} 
                                    onChangeText={(val) => this.setState({ward:val})}
                                    />
                
                   
                  <Text  style={styles.inputlabel}> Comment Issue:</Text>
                <TextInput 
                          style = {styles.loan_input}   
                           placeholder='comment...' 
                           multiline={true}
                           numberOfLines={5}
                           keyboardType='default'
                           value={this.state.comment}
                           placeholderTextColor='#7E807F' 
                        //    onFocus={()=>this.setState({clear_err:true})} 
                           onChangeText={(val) => this.setState({comment:val})}
                           />

                        <View style={styles.img_container}>
                        <Image style={styles.image} source={{ uri: this.state.image }} />
                        <View style={{flexDirection: 'row'}}>
                        <Button onPress={this.selectPicture}>Gallery</Button>
                        <Button onPress={this.takePicture}>Camera</Button>
                        </View>
                    </View>
                   
            
                   
   
               
                   <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.on_submit()}>      
                           <Text  style={styles.buttonText}>REPORT</Text>
                       </TouchableOpacity>
                       
   
                       </ScrollView>  
   
                       </View>
            </View>   
                   
        )
}
}
export default Post


const Button = ({ onPress, children }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )


const styles=StyleSheet.create({
        container:{
            flex:1
        },
        img_container: {
            // flex: 1,
            // backgroundColor: '#ffffff',
            alignItems: 'center',
            justifyContent: 'center',
          },
          image: { width: 300, height: 300, backgroundColor: 'gray' },
        button: {
            padding: 13,
            margin: 15,
            backgroundColor: '#dddddd',
        },
        err_field:{
            marginTop:hp('1%'),
            marginBottom:hp('2%'),
            // color:'#000'
            color:'#F30C0C'
        },
        holder:{
            marginTop:hp('5%'),
            // backgroundColor:'#fff',
            // justifyContent:'center',
            alignItems:'center'
        },
        pick_btn:{
            backgroundColor: '#fff000',
            // borderRadius:wp('1.5%'),
            width:wp('25%'),
            height:hp('6.6%'),
            top:hp('9.3%'),
            zIndex:5,
      
          
          },
          phone_input:{
            color: '#002366',
            width:wp('85%'),
            backgroundColor:'#C5C8D0',
            height:hp('6.6%'),
            // borderRadius: 2,
            textAlign:'center',
            marginBottom:hp('3%')
      
         },
        scroll:{
            marginVertical:hp('2%')
        },
        // img_container:{
        //     flex:1,
        //     width:null,
        //     height:null,
        //     justifyContent: 'center',
        //     resizeMode: 'cover'
        //     // backgroundColor: '#fff',       
        //  },
        input:{
            color: '#002366',
            width:wp('85%'),
            height:hp('6.6%'),
            backgroundColor: '#C5C8D0',
            borderRadius: 2,
            marginBottom:hp('3%')
    
        },
        loan_input:{
            textAlignVertical: 'top',
             width:wp('85%'),
             color:'#002366',
             marginBottom:hp('3%'),
             borderRadius: 2,
             backgroundColor:'#C5C8D0',
            },
        inputlabel:{
            color:'#351913',
            fontSize:15
        },
        picker_phone:{
            height: 50, width:wp('28%'), color:'#000'
          },
        
        picker:{
            height: 50, width:wp('85%'), 
            backgroundColor:'#C5C8D0',
            marginBottom:hp('3%')
        },
        buttonContainer:{
            backgroundColor: '#002366',
            paddingVertical:hp('1.6%'),
            width:wp('30%'),
            left:wp('27%'),
            marginTop:hp('5%'),
            marginBottom:hp('2.5%')
            // paddingTop:20
            // flexGrow:0.4
           },
           buttonText:{
            color: '#fff',
            textAlign: 'center',
            fontWeight: '700'
           },
        textfield:{
            marginBottom:hp('2%')
    
        }
})