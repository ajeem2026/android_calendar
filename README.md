# android_calendar
# 2024 Mock Convention App Calendar

![Calendar Preview](https://drive.google.com/uc?id=10t9M7Ka39ck-2V6p4ELJqL3x_oXFNrUk)

This React Native calendar component is being developed by Abid as part of the W&L 2024 Mock Convention App. The calendar component is designed to provide a user-friendly and visually appealing way to display event schedules and upcoming events. This README will guide you through the usage and features of this calendar component.

## Features

- **Date Picker**: Users can select a date range using the DateRangePicker component to filter events by specific dates.

- **Agenda View**: The calendar includes an Agenda view to display a list of events for the selected date range.

- **Upcoming Events**: Upcoming events are displayed prominently, showing event names, times, and locations.

- **Swiper for Multiple Views**: The Swiper component allows users to switch between different views or screens effortlessly.

## Installation

To use this calendar component in your React Native project, follow these steps:

1. Install the required dependencies by running:

   ```bash
   npm install react-native-calendars react-native-swiper
   ```

2. Copy the `App.js` code into your project.

3. Import the necessary components and stylesheets.

4. Integrate the `App` component into your app's navigation or screen structure.

## Usage

The `App` component can be customized to suit your specific needs and styling preferences. You can modify the styles defined in the `stylesheet` object to match your app's design.

### Calendar Integration

To integrate the calendar component, add the following code to your desired screen:

```jsx
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar, DateRangePicker } from 'react-native-calendars';
import Swiper from 'react-native-swiper';

function YourCalendarScreen() {
    const [selectedDates, setSelectedDates] = useState({});

    const handleDateChange = (range) => {
        setSelectedDates(range);
    };

    return (
        <View style={stylesheet.container}>
            {/* ...other components and views */}
            <Calendar
                style={stylesheet.CalendarBase}
            />
            <DateRangePicker
                startDate={selectedDates.startDate}
                endDate={selectedDates.endDate}
                onDatesChange={handleDateChange}
                containerStyle={stylesheet.DateRangePicker}
            />
            {/* ...other components and views */}
        </View>
    );
}

const stylesheet = StyleSheet.create({
    // ...existing styles
});

export default YourCalendarScreen;
```

### Upcoming Events

The `Upcoming` section in the calendar can be customized and populated with your event data. Replace the sample event data with your own:

```jsx
<View style={stylesheet.PlaceUpcoming}>
    <Text style={stylesheet.DisplayUpcoming}> Upcoming </Text>
    {/* Sample event */}
    <View style={stylesheet.EventBase}>
        <View style={stylesheet.EventPill}></View>
        <Text style={stylesheet.EventDate}> 23 </Text>
        <View style={stylesheet.EventDetailsBase}>
            <Text style={stylesheet.EventName}> Lorem Ipsum </Text>
            <Text style={stylesheet.EventDetails}> 9:00 PM </Text>
            <Text style={stylesheet.EventDetails}> Lorem Place </Text>
        </View>
    </View>
    {/* ...add more upcoming events as needed */}
</View>
```

### Swiper for Multiple Views

You can use the `Swiper` component to create multiple views or screens within your calendar. Customize the content of each view:

```jsx
<Swiper height={500} showsButtons={true}>
    <View style={stylesheet.Slide}>
        <Text style={stylesheet.DisplayUpcoming}>Hello Swiper</Text>
    </View>
    <View style={stylesheet.Slide}>
        <Text>Beautiful</Text>
    </View>
    <View style={stylesheet.Slide}>
        <Text>And simple</Text>
    </View>
</Swiper>
```


## Author

This calendar component is developed by Abid Jeem (Class of 2026)  for the 2024 W&L Mock Convention App.

For any questions or assistance, please contact me at ajeem@mail.wlu.edu

I hope this calendar component enhances your app's user experience and helps you manage event schedules effectively!
