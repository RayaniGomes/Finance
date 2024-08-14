import React, { useState } from 'react';
import { View, Text, Image, Modal, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

import { cores } from '../Cores';

const bancosIcons = '../../../assets/image/bancosIcons/';

const bancos = [
    { label: 'Banco do Brasil', value: 'bb', icon: require(`${bancosIcons}bb.png`) },
    { label: 'Banco Pan', value: 'pan', icon: require(`${bancosIcons}pan.png`) },
    { label: 'Bradesco', value: 'bradesco', icon: require(`${bancosIcons}bradesco.png`) },
    { label: 'Caixa Economica', value: 'caixa', icon: require(`${bancosIcons}caixa.png`) },
    { label: 'Itaú', value: 'itau', icon: require(`${bancosIcons}itau.png`) },
    { label: 'Mercado Pago', value: 'mercado_pago', icon: require(`${bancosIcons}mercado.png`) },
    { label: 'Nubank', value: 'nubank', icon: require(`${bancosIcons}nubank.png`) },
    { label: 'Santander', value: 'santander', icon: require(`${bancosIcons}santander.png`) },
    { label: 'Will Bank', value: 'will_bank', icon: require(`${bancosIcons}will.png`) },
];

const PickerItem = ({ label, icon, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.pickerItemContainer}>
        <Image source={icon} style={styles.pickerItemIcon} />
        <Text style={styles.pickerItemText}>{label}</Text>
    </TouchableOpacity>
);

export default function NovaConta() {
    const [selectedLabel, setSelectedLabel] = useState();
    const [modalVisible, setModalVisible] = useState(false);

    const handleSelect = (label) => {
        setSelectedLabel(label);
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.pickerContainer}>
                <Text style={styles.label}>Banco</Text>
                <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.pickerButton}>
                    <Text style={styles.pickerButtonText}>{ selectedLabel || 'Selecione um banco'}</Text>
                    <Image source={require('../../../assets/image/arrowUp.png')} />
                </TouchableOpacity>
                <Modal
                    visible={modalVisible}
                    transparent={true}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalContainer}>
                        <FlatList
                            data={bancos}
                            renderItem={({ item }) => (
                                <PickerItem
                                    label={item.label}
                                    icon={item.icon}
                                    onPress={() => handleSelect(item.label)}
                                />
                            )}
                            keyExtractor={(item) => item.label}
                        />
                    </View>
                </Modal>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
     pickerContainer: {
        justifyContent: 'center',
        margin: 32,
    },

    label: {
        fontSize: 14,
        fontWeight: '300',
        color: cores.branco,
    },

    pickerItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: cores.azulMedio,
        borderBottomColor: cores.branco,
        borderBottomWidth: 1,
    },
    
    pickerItemIcon: {
        width: 30,
        height: 30,
        marginRight: 10,
        borderRadius: 5,
        resizeMode: 'cover',
    },
    
    pickerItemText: {
        fontSize: 14,
        fontWeight: '400',
        color: cores.branco,
    },
    
    modalContainer: {
        width: "81%",
        top: 190,
        left: 38,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: cores.azulMedio,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    pickerButton: {
        paddingVertical: 5,
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: cores.branco,
        borderBottomWidth: 1,
    },
       
    pickerButtonText: {
        fontSize: 14,
        fontWeight: '400',
        color: cores.branco,
    },
});    