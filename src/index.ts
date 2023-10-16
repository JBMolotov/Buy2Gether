import { AppDataSource } from "./data-source";
import { Company } from "./entity/Company";
import { ClientOfferPermission } from "./entity/ClientOfferPermission";
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
    console.log("Loaded companyes: ", savedCompanies);

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

    console.log("Saving client");
    await clientRepository.save(client);
    console.log("Client saved");
    const savedClients = await clientRepository.find();
    console.log("Loaded clients: ", savedClients);

    console.log();

    // teste offer
    const offerRepository = AppDataSource.getRepository(Offer);
    const offer = offerRepository.create({
      name: "2 bonecas",
      price: 20,
      description: "2 bonecas barbie",
      minimalForConsolidation: 5,
      isPublic: true,
    });

    console.log("Saving offer: ", offer);
    await offerRepository.save(offer);
    console.log("Offer saved");

    const savedOffers = await offerRepository.find();
    console.log(savedOffers);

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
    console.log("Loaded super admins: ", savedSuperAdmins);

    console.log();
  })
  .catch((error) => console.log(error));
