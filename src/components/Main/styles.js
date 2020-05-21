import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#23262C'
    },

    title: {
      color: '#2973E2',
      textAlign: 'center',
      fontSize: 65,
      fontWeight: 'bold',
      marginVertical: 20
    },
  
    toDoContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
  
    toDoInput: {
      backgroundColor: '#ffffff',
      height: 40,
      width: 280,
      fontSize: 16,
      paddingLeft: 5,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5
    },
  
    toDoButton: {
      backgroundColor: '#2973E2',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
      width: 45
    },
  
    loading: {
      marginTop: 45
    },

    cancelButton: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 45,
      marginBottom: 10
    },

    cancelButtonText: {
      color: '#ff0000',
      fontWeight: 'bold',
      fontSize: 18,
      marginLeft: 5
    }
})