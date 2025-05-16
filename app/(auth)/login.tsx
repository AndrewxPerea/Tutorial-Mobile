import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '@/styles/auth.style'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/constants/theme'
import { useSSO } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'


export default function login() {
    const { startSSOFlow } = useSSO()
    const router = useRouter()
    const handleGooglesignIn = async () => {
        try {
            const { createdSessionId, setActive } = await startSSOFlow({
                strategy: 'oauth_google'
            });
            if (setActive && createdSessionId) {
                setActive({ session: createdSessionId });
                router.replace('/(tabs)');
            }
        } catch (error) {
            console.error('Error during Google sign-in:', error)
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.brandSection}>
                <View style={styles.logoContainer}>
                    <Ionicons name="logo-apple" size={50} color={COLORS.primary} />
                </View>
                <Text style={styles.appName}>Trabajo Seguro en Alturas</Text>
                <Text style={styles.tagline}>Tu seguridad es nuestra prioridad</Text>
            </View>
            <View style={styles.illustrationContainer}>
                <Ionicons name="logo-apple" size={200} color={COLORS.primary} />
            </View>
            {/*login section*/}
            <View style={styles.loginSection}>
                <TouchableOpacity
                    style={styles.googleButton}
                    onPress={handleGooglesignIn}
                    activeOpacity={0.9}
                >
                    <View style={styles.googleIconContainer}>
                        <Ionicons name="logo-google" size={24} color={COLORS.surface} />
                    </View>
                    <Text style={styles.googleButtonText}>Iniciar sesión con Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}