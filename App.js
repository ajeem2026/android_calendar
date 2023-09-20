import React, { useState } from 'react';
import { Image, ScrollView, AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Calendar,CalendarUtils, CalednarList, Agenda, DateRangePicker } from 'react-native-calendars';
import Swiper from 'react-native-swiper';

const getDate = (count) => {
    const date = new Date();
    const newDate = date.setDate(date.getDate() + count);
    return CalendarUtils.getCalendarDateString(newDate);
};


function App() {

    const [selectedDates, setSelectedDates] = useState({});

    const handleDateChange = (range) => {
        setSelectedDates(range);
    };

    return (
        <View style={stylesheet.container}>
            <View style={stylesheet.HeaderParent}>
                <View style={stylesheet.HeaderTop}>
                    <Text style={stylesheet.HeaderTopText}>SCHEDULE</Text>



                </View>
                <View>


                    <Calendar style={
                        {
                            position: "absolute",
                            width: "100%",
                            marginLeft: "3%",
                            marginRight: "16%",
                            marginTop: "18%",
                            backgroundColor: "rgba(255,255,255,1)",
                            borderRadius: 0,

                        }}
                        onDayPress={(day)=>{}}
                        markingType={"period"}
                        markedDates={{
                            [getDate(8)]: {
                                marked: true,
                                selected: true,
                                startingDay: true,
                                color: "rgba(167,2,2,1)",
                                customContainerStyle:{
                                    borderRadius: 20,
                                }


                            }, 
                            [getDate(9)]: {
                                selected: true,
                                color: "rgba(167,2,2,1)",
                            }, 
                            [getDate(10)]: {
                                selected: true,
                                color: "rgba(167,2,2,1)",
                                endingDay: true,
                            }, 
                        }}
                    />

                    {/* <DateRangePicker
                        startDate={selectedDates.startDate}
                        endDate={selectedDates.endDate}
                        onDatesChange={handleDateChange}
                        containerStyle={stylesheet.DateRangePicker}
                    /> */}





                </View>

            </View>
            <View style={stylesheet.PlaceUpcoming}>
                <Text style={stylesheet.DisplayUpcoming}> Upcoming </Text>
            </View>
            <Swiper style={stylesheet.swiper} height={300} loop={true}  >
                <View style={stylesheet.Slide} >
                    <View style={stylesheet.EventBase}>
                        <View style={stylesheet.EventPill}>

                        </View>

                        <Text style={stylesheet.EventDate}> 23 </Text>

                        <View style={stylesheet.EventDetailsBase}>

                            <Text style={stylesheet.EventName}> Lorem Ipsum </Text>
                            <Text style={stylesheet.EventDetails}> 9:00PM </Text>
                            <Text style={stylesheet.EventDetails}> Lorem Place </Text>

                        </View>


                    </View>
                    <View style={stylesheet.EventBase}>
                        <View style={stylesheet.EventPill}>

                        </View>

                        <Text style={stylesheet.EventDate}> 23 </Text>

                        <View style={stylesheet.EventDetailsBase}>

                            <Text style={stylesheet.EventName}> Lorem Ipsum </Text>
                            <Text style={stylesheet.EventDetails}> 9:00PM </Text>
                            <Text style={stylesheet.EventDetails}> Lorem Place </Text>

                        </View>


                    </View>
                </View>
                <View style={stylesheet.Slide} >
                    <View style={stylesheet.EventBase}>
                        <View style={stylesheet.EventPill}>

                        </View>

                        <Text style={stylesheet.EventDate}> 23 </Text>

                        <View style={stylesheet.EventDetailsBase}>
                            <Text style={stylesheet.EventName}> Lorem Ipsum </Text>
                            <Text style={stylesheet.EventDetails}> 9:00PM </Text>
                            <Text style={stylesheet.EventDetails}> Lorem Place </Text>
                        </View>
                    </View>
                </View>
                <View style={stylesheet.Slide} >
                    <View style={stylesheet.EventBase}>
                        <View style={stylesheet.EventPill}>

                        </View>

                        <Text style={stylesheet.EventDate}> 23 </Text>

                        <View style={stylesheet.EventDetailsBase}>

                            <Text style={stylesheet.EventName}> Lorem Ipsum </Text>
                            <Text style={stylesheet.EventDetails}> 9:00PM </Text>
                            <Text style={stylesheet.EventDetails}> Lorem Place </Text>

                        </View>


                    </View>
                    <View style={stylesheet.EventBase}>
                        <View style={stylesheet.EventPill}>

                        </View>

                        <Text style={stylesheet.EventDate}> 23 </Text>

                        <View style={stylesheet.EventDetailsBase}>

                            <Text style={stylesheet.EventName}> Lorem Ipsum </Text>
                            <Text style={stylesheet.EventDetails}> 9:00PM </Text>
                            <Text style={stylesheet.EventDetails}> Lorem Place </Text>

                        </View>


                    </View>
                </View>
                <View style={stylesheet.Slide} >
                    <View style={stylesheet.EventBase}>
                        <View style={stylesheet.EventPill}>

                        </View>

                        <Text style={stylesheet.EventDate}> 23 </Text>

                        <View style={stylesheet.EventDetailsBase}>
                            <Text style={stylesheet.EventName}> Lorem Ipsum </Text>
                            <Text style={stylesheet.EventDetails}> 9:00PM </Text>
                            <Text style={stylesheet.EventDetails}> Lorem Place </Text>
                        </View>
                    </View>
                </View>
            </Swiper>
        </View>


    )
}

const stylesheet = StyleSheet.create({

    swiper: {
        justifyContent: "center",

        position: "absolute",
        top: "50%",

    },

    container: {
        width: "100%",
        height: "100%",
    },
    HeaderTop: {
        position: 'absolute',
        width: "100%",
        height: "30%",
        borderBottomColor: "#FFFFFF",
        borderBottomWidth: 0.9,

        opacity: 1,
    },
    HeaderTopText: {
        position: "absolute",
        width: "100%",
        textAlign: "center",
        fontSize: 30,
        color: "#FFFFFF",
        fontWeight: "bold",
        fontFamily: ".SF Compact",
        padding: 10,
    },


    HeaderParent: {
        position: "absolute",
        width: "100%",
        height: "23%",
        borderRadius: 0,
        opacity: 1,
        zIndex: -1,
        transform: [
            { translateX: 0 },
            { translateY: 0 },
            { rotate: "0deg" },
        ],
        backgroundColor: "rgba(167,2,2,1)",
    },

    CalendarBase: {
        position: "absolute",
        width: "100%",
        height: 300,
        opacity: 1,
        marginLeft: "3%",
        marginRight: "22%",
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 25,
        top: "50%",
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "center",

    },

    DateRangePicker: {
        position: 'absolute',
        marginTop: '50%',
        marginLeft: '3%',

    },


    PlaceUpcoming: {
        marginLeft: "3%",
        top: "50%",
        display: "flex",
    },

    DisplayUpcoming: {
        fontSize: 35,
        fontFamily: "Inter",
        fontWeight: 100,
        textAlign: "left",
        color: "#7A0202",
    },

    Slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: "25%",
    },

    EventBase: {
        flexDirection: "row",
        backgroundColor: "white",
        marginLeft: "3%",
        marginRight: "3%",
        marginTop: "3%",
        marginBottom: "3%",
        height: "25.33%",


    },

    EventPill: {
        backgroundColor: "#DD0100",
        borderRadius: 20,
        height: "100%",
        width: "2%",
        left: "0%",
        top: "0%",
        //float: "left",
    },

    EventDate: {
        flex: 1,
        color: "#DD0100",
        fontSize: 40,
        left: "30%",
        fontWeight: "bold",
        fontFamily: "Lato",
        textAlignVertical: "center",

    },

    EventDetailsBase: {
        flex: 1,
        fontFamily: "Lato",
        right: "10%",
        alignContent: "center",
        height: "100%",


    },

    EventDetails: {
        textAlign: "left",
        color: "#4D4D4F",
        fontWeight: "bold",

    },

    EventName: {
        textAlign: "left",
        color: "#DD0100",
        fontWeight: "bold",

    },







});


export default App; 