import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Image
} from "@react-pdf/renderer"

const styles = StyleSheet.create({
    reportHeading: {
        textAlign: "center",
        fontSize: 24,
        color: "#365F91",
        marginTop: "130px"
    },
    castLogo: {
        width: "170px",
        position:"absolute",
        top: "20px",
        right: "20px",
    },
    appInfo: {
        textAlign: "center",
        fontSize: 14,
        margin: 10,
    },
    dataTitle: {
        textAlign: "center",
        fontSize: 24,
        color: "#365F91",
        margin: 20,
    },
    dataAuthor: {
        textAlign: "center",
        fontSize: 12,
        color: "#192C4F",
        margin: 5,
    },
    dataBody: {
        textAlign: "center",
        fontSize: 15,
        margin: 20,
    },
    pageNum: {
        position: "absolute",
        fontSize: 8,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    }
})


export const PDFDocument = ({info, data}) => {
    return (
        <Document>
            <Page>
                <View>
                    <Image style={styles.castLogo} src = "CAST_Logo.png" />
                    <Text style={styles.reportHeading}>{info.title}</Text>
                    <View>
                        <Text style={styles.appInfo}>Application Name: {info.appName}</Text>
                        <Text style={styles.appInfo}>Version: {info.version}</Text>
                        <Text style={styles.appInfo}>CastAIP: {info.castAIP}</Text>
                        <Text style={styles.appInfo}>Date: {info.date}</Text>
                    </View>
                </View>
                {data && data.map((item) => (
                    <View break>
                        <Text style={styles.dataTitle}>{item.title}</Text>
                        <Text style={styles.dataAuthor}>Author: {item.author}</Text>
                        <Text style={styles.dataBody}>{item.body}</Text>
                    </View>
                ))}
                <Text style={styles.pageNum} render={({ pageNumber, totalPages }) => (
                    `${pageNumber} / ${totalPages}`
                )} fixed />
            </Page>
        </Document>
    )
}