import { AppDataSource } from "./data-source";
import { Company } from "./entity/Company";
import { Client } from "./entity/Client";
import { SuperAdmin } from "./entity/SuperAdmin";
import { Offer } from "./entity/Offer";

AppDataSource.initialize()
  .then(async () => {
    const companyRepository = AppDataSource.getRepository(Company);
    const company = companyRepository.create({
      cpfCnpj: 1234,
      name: "teste brinquedos",
      email: "teste@teste.br",
      password: "123",
      address: "rua sao carlos 400",
      fieldOfActivity: "brinquedo",
    });

    console.log("Saving company: ", company);
    await companyRepository.save(company);
    console.log("company saved");

    const savedCompanies = await companyRepository.find();
    console.log("Loaded from database: ", savedCompanies);

    console.log();

    // teste client

    const clientRepository = AppDataSource.getRepository(Client);
    const client = clientRepository.create({
      cpf: 4321,
      name: "Rafael",
      email: "rafael@rafael.br",
      password: "123",
      address: "rua carlos sao 300",
      phoneNumber: 123456789,
    });

    const client2 = clientRepository.create({
      cpf: 6574,
      name: "Pedro",
      email: "pedro@pedro.br",
      password: "12345",
      address: "rua sao paulo 100",
      phoneNumber: 56743812,
    });

    console.log("Saving client ", client);
    await clientRepository.save(client);
    console.log("Client saved");

    console.log("Saving client ", client2);
    await clientRepository.save(client2);
    console.log("Client saved");

    const savedClients = await clientRepository.find();
    console.log("Loaded from database: ", savedClients);

    console.log();

    // teste offer

    const offerRepository = AppDataSource.getRepository(Offer);

    const offer = offerRepository.create({
      name: "2 bonecas",
      price: 20,
      description: "2 bonecas barbie",
      minimalForConsolidation: 5,
      totalAmount: 15,
      isPublic: true,
    });

    const offer2 = offerRepository.create({
      name: "3 carrinhos",
      price: 30,
      description: "3 carrinhos hot wheels",
      minimalForConsolidation: 7,
      totalAmount: 20,
      isPublic: false,
    });

    console.log("Saving offer: ", offer);
    await offerRepository.save(offer);
    console.log("Offer saved");

    console.log("Saving offer: ", offer2);
    await offerRepository.save(offer2);
    console.log("Offer saved");

    const savedOffers = await offerRepository.find();
    console.log("Loaded from database: ", savedOffers);

    console.log();

    // teste historic

    const historicRepository = AppDataSource.getRepository(Historic);
    const historic = historicRepository.create({
      amount: 2,
      client: client,
      offer: offer,
    });

    console.log("Saving historic: ", historic);
    await historicRepository.save(historic);
    console.log("Historic saved");

    const savedHistorics = await historicRepository.find();
    console.log("Loaded from database: ", savedHistorics);

    console.log();

    // teste super admin

    const superAdminRepository = AppDataSource.getRepository(SuperAdmin);
    const superAdmin = superAdminRepository.create({
      name: "admin",
      email: "admin@admin.br",
      password: "123",
    });

    console.log("Saving super admin: ", superAdmin);
    await superAdminRepository.save(superAdmin);
    console.log("Super admin saved");

    const savedSuperAdmins = await superAdminRepository.find();
    console.log("Loaded from database: ", savedSuperAdmins);

    // // teste permissao
    // const clientRepository = AppDataSource.getRepository(Client);
    // const offerRepository = AppDataSource.getRepository(Offer);

    // const clientId = 1;
    // const offerId = 1;

    // const client = await clientRepository.findOne({
    //   where: { id: clientId },
    //   relations: ["offers"],
    // });
    // const offer = await offerRepository.findOne({
    //   where: { id: offerId },
    // });
    // if (!client || !offer) {
    //   console.error("Client or offer not found!");
    //   return;
    // }
    // client.offers.push(offer);
    // await clientRepository.save(client);
    // console.log("Permission saved");
  })
  .catch((error) => console.log(error));
