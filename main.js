// // // // alert("Hi js")
// // // alert("Hello word")

// // /*
// // *o

// // */
// // var fullName = 'Cao Van Hai Anh';//khai báo tên
// // var age = 20;//khai báo tuổi

// // //gọi hàm thông báo
// // alert(fullName);
// // alert(age);

// var fullName = 'Cao Van Hai Anh'

// console.log(fullName);

// confirm('Xac nhan ban du tuoi')

// prompt('Xac nhan do tuoi')

// setTimeout(function () {
//     alert('thong bao')
// },1000)

// setInterval(function(){
//     console.log('ddddddddd' + Math.random());

// },1000)

// var age = 20
// var nextAge= age+1
// console.log(age);

// var a= 1;
// a += 2;
// console.log(a);

// console.log('--Hậu tố--');
// var number1 = 1;
// console.log(number1++);
// console.log(number1);

// var a = 6;
// var output = a++ + --a;
// console.log('a: ', a);

//Toán tử nối chuỗi
// var a = 'Hải Anh';
// var c = 'YÊU';
// var b = 'Ánh Linh';

// console.log(a + ' ' + c + ' ' + b);

// var age = 10

// if (age < 18) {
//     console.log('Không đủ tuổi mua rượu');
// } else {
//     console.log('Đủ tuổi mua rượu');
// }

import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const dang_nhap = {
    "tn_dn": [
        { 'gmail': 'a', 'pass': '1234' }
    ]
}

const main = ({ navigation }) => {
    const [Gmail, setGmail] = useState('');
    const [Pass, setPass] = useState('');
    const [Error, setError] = useState('');

    const healogin = () => {
        if (Gmail == '' || Pass == '') {
            setError('Nhap dayt du!')
            return;
        }

        const user = dang_nhap.tn_dn.find(uss => uss.gmail == Gmail && uss.pass == Pass);

        if (user) {
            navigation.navige('Index')
            setGmail('')
            setPass('')

            setError('')

        } else {
            setError('Sai user hoac Pass nhap lai cho dung!')
        }
    }

    return (
        <View style={{ backgroundColor: 'red', flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red' }}>main</Text>
            <TextInput
                placeholder='Nhap gmail'
                placeholderTextColor='#88888888'
                style={{ borderWidth: 1, borderRadius: 20, width: 300, height: 30 }}
                onChangeText={setGmail}
                value={Gmail} />

            <TextInput
                placeholder='Nhap password'
                placeholderTextColor='#88888888'
                style={{ borderWidth: 1, borderRadius: 12, width: 300, height: 30 }}
                onChangeText={setPass}
                value={Pass} />

            <TextInput
                placeholder='Nhap password'
                placeholderTextColor='#88888888'
                style={{ borderWidth: 1, borderRadius: 12, width: 300, height: 30 }}
                onChangeText={setPass}
                value={Pass} />

            <TextInput
                placeholder='Nhap password'
                placeholderTextColor='#88888888'
                style={{ borderWidth: 1, borderRadius: 12, width: 300, height: 30 }}
                onChangeText={setPass}
                value={Pass} />

            <TouchableOpacity style={{ backgroundColor: 'red', width: 30, height: 20, margin: 30 }} onPress={healogin}>
                <Text style={{ fontSize: 20, color: 'red' }}>Login</Text>
            </TouchableOpacity>

            {Error ? <Text style={{ fontSize: 12, color: 'red', fontStyle: 'italic' }}>{Error}</Text> : null}


        </View>
    )

}

export default main

const styles = StyleSheet.create({})







