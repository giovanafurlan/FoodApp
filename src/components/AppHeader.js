import React from 'react';
import { 
    View, 
    Text,
    Pressable,
    Image
} from 'react-native';
import { COLORS, SIZES, fakeDataAPI } from '../constants';

export const AppHeader = ({ title }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
            }}
        >
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Text style={{...SIZES.fontRegular}}>
                    {title}
                </Text>
            </View>
            <Pressable
            style={({pressed})=>[
                {opacity: pressed ? 0.5 : 1.0},
                {
                    marginRight: SIZES.margin * 2,
                    alignItems: 'center',
                    justifyContent: 'center'
                },
            ]}>
            <Image
                source={fakeDataAPI?.myProfile?.profile_image}
                style={{
                    width: 35,
                    height: 35,
                    borderRadius: SIZES.radius
                }}
            />
            </Pressable>
        </View>
    )
}