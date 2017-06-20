import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const reservations = [{"id":1,"user_id":3,"begin":"1159-08-06 18:04:26+00","end":"1557-05-28 23:18:49+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":2,"user_id":4,"begin":"1067-03-04 12:52:30+00","end":"1517-08-06 02:36:36+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":3,"user_id":5,"begin":"1973-11-21 15:18:09+00","end":"2011-12-04 00:30:48+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":4,"user_id":6,"begin":"0046-04-22 13:11:31+00","end":"1041-05-14 08:41:27+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":5,"user_id":7,"begin":"0196-01-05 19:51:20+00","end":"0526-05-17 18:17:08+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":6,"user_id":8,"begin":"0365-12-21 03:02:55+00","end":"0467-08-04 18:14:51+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":7,"user_id":9,"begin":"0876-10-15 18:20:42+00","end":"1233-10-31 23:48:04+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":8,"user_id":10,"begin":"0018-07-30 07:53:55+00","end":"0688-01-21 23:31:52+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":9,"user_id":11,"begin":"0524-12-15 03:08:03+00","end":"0580-05-25 23:39:00+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":10,"user_id":12,"begin":"0720-10-31 15:26:19+00","end":"1317-02-06 16:41:55+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":11,"user_id":13,"begin":"0112-05-02 02:24:52+00","end":"0763-05-24 16:37:57+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":12,"user_id":14,"begin":"0296-09-04 16:47:35+00","end":"0983-09-15 08:51:02+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":13,"user_id":15,"begin":"0563-09-03 17:00:24+00","end":"0799-04-24 15:41:46+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":14,"user_id":16,"begin":"0238-08-20 00:31:44+00","end":"1239-11-01 00:16:32+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":15,"user_id":17,"begin":"0530-03-05 21:20:16+00","end":"1208-10-31 05:52:03+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":16,"user_id":18,"begin":"1385-05-17 07:52:30+00","end":"1977-06-23 23:09:53+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":17,"user_id":19,"begin":"0284-05-15 19:28:05+00","end":"1188-11-15 19:42:57+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":18,"user_id":20,"begin":"0712-08-12 02:21:12+00","end":"1236-01-22 21:15:05+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":19,"user_id":21,"begin":"0033-03-15 01:18:03+00","end":"0222-01-06 16:46:58+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":20,"user_id":22,"begin":"0069-04-25 02:26:14+00","end":"1901-07-07 15:17:38+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":21,"user_id":23,"begin":"0140-07-29 06:38:39+00","end":"1769-10-21 05:51:42+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":22,"user_id":24,"begin":"1551-01-03 09:31:26+00","end":"1857-07-13 13:58:32+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":23,"user_id":25,"begin":"0032-10-02 09:13:47+00","end":"0089-10-24 04:08:37+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":24,"user_id":26,"begin":"0016-05-08 06:48:40+00","end":"0042-01-09 21:16:30+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":25,"user_id":27,"begin":"1497-05-28 07:33:02+00","end":"1890-09-28 02:04:14+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":26,"user_id":28,"begin":"0976-03-06 16:54:34+00","end":"1027-04-03 16:48:19+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":27,"user_id":29,"begin":"0823-07-08 20:08:07+00","end":"1104-04-06 04:43:57+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":28,"user_id":30,"begin":"0433-01-09 09:16:00+00","end":"0571-05-19 10:54:06+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":29,"user_id":31,"begin":"1479-01-05 17:49:02+00","end":"1708-04-13 22:23:25+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":30,"user_id":32,"begin":"1301-09-01 16:52:09+00","end":"1538-08-15 05:24:09+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":31,"user_id":33,"begin":"0228-04-30 15:46:59+00","end":"0592-10-06 00:12:16+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":32,"user_id":34,"begin":"0158-10-05 16:36:01+00","end":"0652-12-17 04:47:12+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":33,"user_id":35,"begin":"0088-06-29 14:16:51+00","end":"0766-08-10 22:46:23+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":34,"user_id":36,"begin":"0036-05-21 18:10:19+00","end":"1244-08-20 01:40:02+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":35,"user_id":37,"begin":"0708-08-04 13:50:33+00","end":"0893-07-30 02:34:39+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":36,"user_id":38,"begin":"0486-02-06 03:14:46+00","end":"0832-11-21 10:55:26+00","created_at":"2017-06-20 18:21:10","updated_at":"2017-06-20 18:21:10"},{"id":37,"user_id":39,"begin":"1144-06-09 09:27:06+00","end":"1147-11-01 22:24:31+00","created_at":"2017-06-20 18:21:11","updated_at":"2017-06-20 18:21:11"},{"id":38,"user_id":40,"begin":"0057-06-24 05:51:12+00","end":"0731-10-11 02:09:40+00","created_at":"2017-06-20 18:21:11","updated_at":"2017-06-20 18:21:11"},{"id":39,"user_id":41,"begin":"0228-07-06 05:27:20+00","end":"1446-11-18 03:03:09+00","created_at":"2017-06-20 18:21:11","updated_at":"2017-06-20 18:21:11"},{"id":40,"user_id":42,"begin":"0126-07-01 10:09:30+00","end":"1393-06-25 15:30:06+00","created_at":"2017-06-20 18:21:11","updated_at":"2017-06-20 18:21:11"},{"id":41,"user_id":43,"begin":"1308-10-12 08:44:53+00","end":"1574-08-15 10:04:38+00","created_at":"2017-06-20 18:21:11","updated_at":"2017-06-20 18:21:11"},{"id":42,"user_id":44,"begin":"0553-10-13 12:21:13+00","end":"1130-12-02 18:46:03+00","created_at":"2017-06-20 18:21:11","updated_at":"2017-06-20 18:21:11"},{"id":43,"user_id":45,"begin":"0024-10-03 12:34:25+00","end":"0128-08-30 20:28:26+00","created_at":"2017-06-20 18:21:11","updated_at":"2017-06-20 18:21:11"},{"id":44,"user_id":46,"begin":"0531-09-09 09:59:32+00","end":"1914-12-24 15:48:41+00","created_at":"2017-06-20 18:21:11","updated_at":"2017-06-20 18:21:11"},{"id":45,"user_id":47,"begin":"0316-01-03 13:40:36+00","end":"0401-05-09 23:35:21+00","created_at":"2017-06-20 18:21:11","updated_at":"2017-06-20 18:21:11"},{"id":46,"user_id":48,"begin":"0292-06-13 12:15:01+00","end":"1039-12-02 12:14:26+00","created_at":"2017-06-20 18:21:11","updated_at":"2017-06-20 18:21:11"},{"id":47,"user_id":49,"begin":"0419-01-01 07:16:40+00","end":"1962-04-15 08:01:10+00","created_at":"2017-06-20 18:21:11","updated_at":"2017-06-20 18:21:11"},{"id":48,"user_id":50,"begin":"0329-10-01 21:22:56+00","end":"0349-01-15 12:53:20+00","created_at":"2017-06-20 18:21:11","updated_at":"2017-06-20 18:21:11"},{"id":49,"user_id":51,"begin":"0596-12-27 23:46:57+00","end":"1914-01-06 15:15:21+00","created_at":"2017-06-20 18:21:11","updated_at":"2017-06-20 18:21:11"},{"id":50,"user_id":52,"begin":"0620-04-23 13:37:48+00","end":"1730-12-07 22:32:37+00","created_at":"2017-06-20 18:21:11","updated_at":"2017-06-20 18:21:11"}];
    return {reservations};
  }
}