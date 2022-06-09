import React from "react";
import { 
    View,
    Image,
    ScrollView,
    StyleSheet,
    Text,

} from "react-native";
const ProfileScreen = ({navigation}) => {
    const onPressHandler = () => {
        navigation.navigate('Home');
    }
    return (
        <View style={styles.body}>
        <ScrollView>
            <Image style={styles.image}
                source={require('../assets/reinaldo_hardana.png')}
            />
            <Text style={styles.text_title}>REINALDO HARDANA</Text>
            <Text style={styles.text_subtitle}>I'm Fresh Graduate of Informatics Engineering</Text>
            <Text style={styles.text}>Education in Information Technology, especially in the ​
            field of software development, web – oriented ​applications and IT consultant who will make use of ​
            logical skills and strong analytical to work individually as ​well as team work</Text>
            <Text style={styles.text_subtitle}>Background</Text>
            <Text style={{
                color: 'black', 
                fontSize: 14,
                fontWeight: 'bold',
                paddingHorizontal: 20
                }}>SMK NEGERI 2 Singosari</Text>
            <Text style={{color: 'black', paddingHorizontal:20}}>Computer and Network Engineering</Text>
            <Text style={{
                color: 'black', 
                fontSize: 14,
                fontWeight: 'bold',
                paddingHorizontal: 20
                }}>Politeknik Negeri Malang</Text>
            <Text style={{color: 'black', paddingHorizontal:20}}>Bachelor Degree of Informatics Engineering</Text>
            <Text style={styles.text_subtitle}>Expertise</Text>
            <Text style={{color: 'black', paddingHorizontal:20}}>- Web Programming</Text>
            <Text style={{color: 'black', paddingHorizontal:20}}>- Mobile Programming</Text>
            <Text style={{color: 'black', paddingHorizontal:20}}>- Data Modelling</Text>
            <Text style={{color: 'black', paddingHorizontal:20}}>- IT Essentials</Text>
            <Text style={{color: 'black', paddingHorizontal:20}}>- SQL Experience</Text>
            <Text style={styles.text_subtitle}>Internship</Text>
            <Text style={{
                color: 'black', 
                fontSize: 14,
                fontWeight: 'bold',
                paddingHorizontal: 20
                }}>PPPPTK BOE/VEDC Malang</Text>
            <Text style={{color: 'black', paddingHorizontal:20}}>6 Months</Text>
            <Text style={{
                color: 'black', 
                fontSize: 14,
                fontWeight: 'bold',
                paddingHorizontal: 20
                }}>Dinas Pendidikan Kota Batu</Text>
            <Text style={{color: 'black', paddingHorizontal:20}}>1 Month</Text>
            <Text style={{
                color: 'black', 
                fontSize: 14,
                fontWeight: 'bold',
                paddingHorizontal: 20
                }}>PT. ADMA Digital Solusi</Text>
            <Text style={{color: 'black', paddingHorizontal:20}}>8 Months</Text>
            <Text style={styles.text_subtitle}>Programming Language</Text>
            <Text style={{color: 'black', paddingHorizontal:20}}>- Java</Text>
            <Text style={{color: 'black', paddingHorizontal:20}}>- PHP</Text>
            <Text style={{color: 'black', paddingHorizontal:20}}>- C#</Text>
            <Text style={{color: 'black', paddingHorizontal:20}}>- Python</Text>
            <Text style={styles.text_subtitle}>Internship Dinas Pendidikan Kota Batu</Text>
            <Image
                style={{ width:320, alignSelf: 'center', height: 170, resizeMode: 'contain' }}
                source={require('../assets/porto1.jpg')}
            />
            <Text style={styles.text}>Mail Archiving for recap incoming and outgoing email into .xls or ​
            .docx format</Text>
            <Text style={styles.text}>Make a method authentication for user login as super admin or admin 
            which affects the functions used ​to manage tables in the database.</Text>
            <Image
                style={{ width:320, alignSelf: 'center', height: 100, resizeMode: 'contain' }}
                source={require('../assets/porto2.jpg')}
            />
            <Text style={styles.text}>Make a function for entry data, export to Ms. Excel/Ms. Word format file, 
            show number of data entries, search whole table, sort by column, and action button to view 
            details, edit data and delete data.</Text>
            <Image
                style={{ width:320, alignSelf: 'center', height: 90, resizeMode: 'contain' }}
                source={require('../assets/porto3.jpg')}
            />
            <Text style={styles.text}>Make an input form for incoming mail with the attributes of the letter 
            number that has been given the ​format, subject, date, recipient and sender</Text>
            <Image
                style={{ width:320, alignSelf: 'center', height: 100, resizeMode: 'contain' }}
                source={require('../assets/porto4.jpg')}
            />
            <Text style={styles.text_subtitle}>Internship PT. ADMA Digital Solusi</Text>
            <Image
                style={{ width:320, alignSelf: 'center', height: 170, resizeMode: 'contain' }}
                source={require('../assets/porto5.jpg')}
            />
            <Text style={styles.text}>Make a line chart to predict of active cases after 14 days. And then uses 
            the District and date range filters ​to predict the next date.</Text>
            <Image
                style={{ width:320, alignSelf: 'center', height: 170, resizeMode: 'contain' }}
                source={require('../assets/porto6.jpg')}
            />
            <Image
                style={{ width:320, alignSelf: 'center', height: 170, resizeMode: 'contain', marginTop:30 }}
                source={require('../assets/porto7.jpg')}
            />
            <Image
                style={{ 
                    width:320, 
                    alignSelf: 'center', 
                    height: 170, 
                    resizeMode: 'contain',
                    marginBottom: 30,
                    marginTop:15 }}
                source={require('../assets/porto8.jpg')}
            />
        </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 14,
        paddingBottom: 5,
        paddingHorizontal: 20,
        color: 'black'
    },
    image: {
        marginTop: 50,
        height: 200,
        width:200,
        borderRadius: 100,
        borderWidth:10,
        borderColor: 'black',
        alignSelf:'center'
    },
    text_title: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10,
        color: 'black'
    },
    text_subtitle: {
        paddingHorizontal:20,
        fontWeight: 'bold',
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 10,
        color: 'black'
    }
})

export default ProfileScreen;