import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    toDo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 325,
      height: 45,
      backgroundColor: '#ffffff',
      borderRadius: 5,
      padding: 15,
      alignSelf: 'center',
      marginTop: 15
    },
  
    ToDoTextContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },
  
    toDoText: {
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 5
    }  
})