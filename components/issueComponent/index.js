import React, {useState, useEffect} from 'react';
import { Text, FlatList, SafeAreaView, StyleSheet, Image, View, ActivityIndicator, TextInput } from 'react-native';
import 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const IssueComponent = () => {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [query, setQuery] = useState('');
    const [filterData, setFilterData] = useState([]);
    
    console.log(data);

    const getIssueFromAPI = () => {
        return setLoading(true), fetch(`https://api.github.com/search/issues?q=a&per_page=10&page=${currentPage}`)
            .then((response) => response.json())
            .then((json) => {
                setData([...data, ...json.items]);
                setFilterData([...data, ...json.items]);
            })
            // .then((json) => setData(json))
            .catch((error) => console.error(error))
            .then(setLoading(false));
    };

    const renderItem = ({item}) => {
        // let data = item.created_at.toString().splice(0,10);
        return (
            <View style={styles.itemWrapper}>
                <Image style={styles.imageStyle} source={{ uri: item.user.avatar_url }} />
                <View style={styles.contentWrapper}>
                    <Text style={styles.txtTitleStyle}>{item.title}</Text>
                    <Text style={{fontFamily:'Questrial-Regular'}}>created at {item.created_at}</Text>
                    <Text style={{fontFamily:'Questrial-Regular'}}>comments: {item.comments}</Text>
                </View>
            </View>
        );
    };

    const renderLoader = () => {
        return(
            isLoading ?
                <View style={styles.loaderStyle}>
                    <ActivityIndicator size='large' color='#aaaa'/>
                </View> : null
        );
    };

    const renderHeader = () => {
        return (
            <View
                style={styles.searchBarView}
            >
                <MaterialIcons style={styles.searchIcon} name='search' size={30} color='grey'></MaterialIcons>
                <TextInput
                    value={query}
                    onChangeText={text => handleSearch(text)}
                    placeholder="Search issues here"
                    style={{ backgroundColor: '#fff', paddingHorizontal: 20, borderRadius:20 ,fontFamily:'Questrial-Regular'}}
                />
            </View>
        );
    };

    const handleSearch = (text) => {
        if (text) {
            const newData = data.filter((item) => {
                const itemData = item.title;
                const textData = text;
                return itemData.indexOf(textData) > -1;
            });
            setFilterData(newData);
            setQuery(text);
        } else {
            setFilterData(data);
            setQuery(text);
        }
    };

    const LoadMoreItem = () => {
        setCurrentPage(currentPage + 1);
    };

    useEffect(() => {
        getIssueFromAPI();
    }, [currentPage]);

    return (
        <View>
            <FlatList
                data = {filterData}
                renderItem = {renderItem}
                keyExtractor = {(item, index) => index.toString()}
                ListHeaderComponent = {renderHeader}
                ListFooterComponent={renderLoader}
                refreshing = {isLoading}
                onRefresh = {getIssueFromAPI}
                onEndReached={LoadMoreItem}
                onEndReachedThreshold={0}
            />
        </View>
        
    );
};

const styles = StyleSheet.create({
    itemWrapper:{
        flexDirection:'row',
        paddingHorizontal:16,
        paddingVertical:16,
        borderBottomWidth:1,
        borderColor:'#ddd',
    },
    imageStyle:{
        width:60,
        height:60,
        marginRight:15,
        borderRadius:30
    },
    contentWrapper:{
        justifyContent:'space-around'
    },
    txtTitleStyle:{
        fontWeight:'bold',
        fontSize:20
    },
    loaderStyle:{
        marginVertical:16,
        alignItems:'center'
    },
    searchBarView:{
        flexDirection:'row',
        backgroundColor: '#fff',
        padding: 2,
        marginVertical: 10,
        borderRadius: 50,
        width:'90%',
        alignSelf:'center'
    },
    searchIcon:{
        alignSelf:'center',
        marginLeft:20
    }

});

export default IssueComponent;