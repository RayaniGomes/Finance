import React, { useState } from 'react';
import { View, Text, Image, Modal, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

import { cores } from '../Cores';

const bancosIcons = '../../../assets/image/bancosIcons/';

const bancos = [
    {
        id: 1,
        label: 'Conta corrente',
    },
    {
        id: 2,
        label: 'Conta salário',
    },
    {
        id: 3,
        label: 'Conta de pagamentos',
    },
    {
        id: 4,
        label: 'Conta polpança',
    },
];

const PickerItem = ({ label, icon, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.pickerItemContainer}>
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
                <Text style={styles.label}>Tipo de conta</Text>
                <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.pickerButton}>
                    <Text style={styles.pickerButtonText}>{selectedLabel || 'Selecione um banco'}</Text>
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
        marginHorizontal: 32,
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

    pickerItemText: {
        fontSize: 14,
        fontWeight: '400',
        color: cores.branco,
    },

    modalContainer: {
        width: "81%",
        top: 280,
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