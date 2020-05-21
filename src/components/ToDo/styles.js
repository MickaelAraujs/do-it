import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    toDo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 325,
      backgroundColor: '#ffffff',
      borderRadius: 5,
      padding: 15,
      alignSelf: 'center',
      marginTop: 15,
      marginHorizontal: 30
    },
  
    ToDoTextContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: 250
    },
  
    toDoText: {
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 5
    }  
})