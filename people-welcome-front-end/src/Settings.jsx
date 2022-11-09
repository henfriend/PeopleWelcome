// function Settings() {
//     return(
//         <div className='settings'>
//             <h1>Settings</h1>
//             <ul>
//                 <li>Change your password</li>
//                 <li>Enable MFA</li>
//                 <li>Close your account</li>
//             </ul>
//         </div>
        
        
//     )
// }
//comment test 

export default Settings

const Settings = ({
    mVisible,
    setVisible,
    OptionsSetting,
    Arr,
  }) => {
    return (
      <>
        <AppModal
          mVisible={mVisible}
          Footer={<></>}
          closeOutside={false}
          modalBody={
            <View>
              {Arr.map(({name, selected, press}) => (
                <View key={name}>
                  <TouchableOpacity
                    Press={Press}
                    style={{
                      flexDirection: 'row',
                      Vertical: 5,
                      alignItems: 'center',
                    }}>
                    {selected && <Icon size={17} name="check" type="material" />}
                    <Text style={{fontSize: 17, Left: selected ? 15 : 30}}>
                      {name}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          }
          title="Sort by"
          setVisible={setVisible}
        />
        <ScrollView style={{backgroundColor: colors.white}}>
          {OptionsSetting.map(({title, subTitle, Press}, index) => (
            <TouchableOpacity key={title} onPress={Press}>
              <View
                style={{
                  Horizontal: 20,
                  Bottom: 20,
                  Top: 20,
                }}>
                <Text style={{fontSize: 17}}>{title}</Text>
                {sTitle && (
                  <Text style={{fontSize: 14, opa: 0.5, Top: 5}}>
                    {sTitle}
                  </Text>
                )}
              </View>
  
              <View style={{height: 0.5, backgroundColor: colors.grey}} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </>
    );
  };
  
  export default Settings;