import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Image
} from "@react-pdf/renderer"
import {
    Table,
    TableHeader,
    TableBody,
    TableCell,
    DataTableCell
  } from "@david.kucsai/react-pdf-table";

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
        marginBottom: 5,
    },
    dataInfo: {
        textAlign: "center",
        fontSize: 12,
        color: "#192C4F",
        margin: 5,
    },
    dataBlock: {
        //margin: 20,
    },
    pageNum: {
        position: "absolute",
        fontSize: 8,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    },
    dataCellHeader: {
        color: "#9FA4A7",
        fontSize: 12,
        padding: 5,
        backgroundColor: "#242424"
    }
    ,
    dataCell: {
        color: "#192C4F",
        fontSize: 8,
        padding: 5,
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "no-wrap",
    },
    pageHeader: {
        fontSize: 8,
        textAlign: "center",
        borderBottom: "1px solid grey",
        margin: "10px 10px 20px 10px",
        color: "grey",
        padding: 5,
    },
    tableContainer: {
        margin: "0px 10px 20px 10px",
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
                        <Text style={styles.appInfo}>Content: {info.content}</Text>
                        <Text style={styles.appInfo}>Date: {info.date}</Text>
                    </View>
                </View>
                <View style={styles.dataBlock} break>
                    <Text style={styles.pageHeader} fixed>PDF-Prototype</Text>
                    {data && data.map((item) => (
                        <View wrap={false}>
                            <Text style={styles.dataTitle}>{item.name}</Text>
                            <Text style={styles.dataInfo}>adgDatabase: {item.adgDatabase}</Text>
                            <Text style={styles.dataInfo}>adgVersion: {item.adgVersion}</Text>
                            <Text style={styles.dataInfo}>adgWebSite: {item.adgWebSite}</Text>
                            <Text style={styles.dataInfo}>Technologies:  
                                {item.technologies && item.technologies.map((tech) => (
                                    <Text> {tech} </Text>
                                ))}
                            </Text>
                        </View>
                    ))}
                </View>
                <View style={styles.dataBlock} break>
                    <Text style={styles.pageHeader} fixed>PDF-Prototype</Text>
                    <View style={styles.tableContainer}>
                        <Table
                        data={data}
                        >
                            <TableHeader textAlign={"center"}>
                                <TableCell style={styles.dataCellHeader} weighting={0.15}>
                                    App Name
                                </TableCell>
                                <TableCell style={styles.dataCellHeader} weighting={0.2}>
                                    adgDatabase
                                </TableCell>
                                <TableCell style={styles.dataCellHeader} weighting={0.1}>
                                    adgVersion
                                </TableCell>
                                <TableCell style={styles.dataCellHeader} weighting={0.35}>
                                    adgWebsite
                                </TableCell>
                                <TableCell style={styles.dataCellHeader} weighting={0.2}>
                                    Technologies
                                </TableCell>
                            </TableHeader>
                            <TableBody textAlign="center">
                                <DataTableCell style={styles.dataCell} weighting={0.15} getContent={(r) => r.name}/>
                                <DataTableCell style={styles.dataCell} weighting={0.2} getContent={(r) => r.adgDatabase}/>
                                <DataTableCell style={styles.dataCell} weighting={0.1} getContent={(r) => r.adgVersion}/>
                                <DataTableCell style={styles.dataCell} weighting={0.35} getContent={(r) => r.adgWebSite}/>
                                <DataTableCell style={styles.dataCell} weighting={0.2} getContent={(r) => r.technologies.toString()}/>
                            </TableBody>
                        </Table>
                    </View>
                </View>
                <Text style={styles.pageNum} render={({ pageNumber, totalPages }) => pageNumber > 1 && (
                    `${pageNumber} / ${totalPages}`
                )} fixed />
            </Page>
        </Document>
    )
}