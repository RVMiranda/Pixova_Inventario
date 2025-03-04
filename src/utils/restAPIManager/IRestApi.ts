export default interface IRestApi <T,D>{
    get( url: string, config?: T ): D;
    post( url: string, data: T, config?: any ): D;
/* 
    put( url: string, data: any, config?: T ): D;
    delete( url: string, config?: T ): D;
    patch ( url: string, data: any, config?: T ): D;
    addCertificate( certificatePath: string ): void; */
}