﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using tmretApi.Data;

#nullable disable

namespace tmretApi.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20221025143453_playerstat")]
    partial class playerstat
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("tmretApi.Entities.Advertisement", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("AdPhoto")
                        .HasColumnType("text");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<DateTime>("FromDate")
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<DateTime>("ToDate")
                        .HasColumnType("timestamp without time zone");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("timestamp without time zone");

                    b.Property<Guid>("createdBy")
                        .HasColumnType("uuid");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("timestamp without time zone");

                    b.HasKey("ID");

                    b.ToTable("Advertisements");
                });

            modelBuilder.Entity("tmretApi.Entities.Degafi", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("BirthDate")
                        .HasColumnType("text");

                    b.Property<Guid>("DegafiSettingId")
                        .HasColumnType("uuid");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<string>("InActiveDescription")
                        .HasColumnType("text");

                    b.Property<bool>("IsActive")
                        .HasColumnType("boolean");

                    b.Property<Guid>("MahberId")
                        .HasColumnType("uuid");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("text");

                    b.Property<string>("UserPhoto")
                        .HasColumnType("text");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("timestamp without time zone");

                    b.Property<Guid>("createdBy")
                        .HasColumnType("uuid");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("timestamp without time zone");

                    b.HasKey("ID");

                    b.HasIndex("DegafiSettingId");

                    b.HasIndex("MahberId");

                    b.ToTable("Degafi");
                });

            modelBuilder.Entity("tmretApi.Entities.DegafiMahber", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uuid");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("timestamp without time zone");

                    b.Property<Guid>("createdBy")
                        .HasColumnType("uuid");

                    b.Property<string>("description")
                        .HasColumnType("text");

                    b.Property<string>("establishedDate")
                        .HasColumnType("text");

                    b.Property<string>("logo")
                        .HasColumnType("text");

                    b.Property<string>("name")
                        .HasColumnType("text");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("websiteAdress")
                        .HasColumnType("text");

                    b.HasKey("ID");

                    b.HasIndex("UserId");

                    b.ToTable("DefafiMahbers");
                });

            modelBuilder.Entity("tmretApi.Entities.DegafiMahberExecutive", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<Guid>("DegafiMahberId")
                        .HasColumnType("uuid");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<string>("birthDate")
                        .HasColumnType("text");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("timestamp without time zone");

                    b.Property<Guid>("createdBy")
                        .HasColumnType("uuid");

                    b.Property<string>("fromDate")
                        .HasColumnType("text");

                    b.Property<string>("inActiveDescription")
                        .HasColumnType("text");

                    b.Property<bool>("isActive")
                        .HasColumnType("boolean");

                    b.Property<string>("name")
                        .HasColumnType("text");

                    b.Property<string>("photo")
                        .HasColumnType("text");

                    b.Property<string>("position")
                        .HasColumnType("text");

                    b.Property<string>("toDate")
                        .HasColumnType("text");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("timestamp without time zone");

                    b.HasKey("ID");

                    b.HasIndex("DegafiMahberId");

                    b.ToTable("DegafiMahberMembers");
                });

            modelBuilder.Entity("tmretApi.Entities.DegafiSetting", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("timestamp without time zone");

                    b.Property<Guid>("createdBy")
                        .HasColumnType("uuid");

                    b.Property<string>("description")
                        .HasColumnType("text");

                    b.Property<Guid>("mahberId")
                        .HasColumnType("uuid");

                    b.Property<float>("money")
                        .HasColumnType("real");

                    b.Property<string>("name")
                        .HasColumnType("text");

                    b.Property<int>("paymentStyle")
                        .HasColumnType("integer");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("timestamp without time zone");

                    b.HasKey("ID");

                    b.HasIndex("mahberId");

                    b.ToTable("DegafiSettings");
                });

            modelBuilder.Entity("tmretApi.Entities.MacthStats", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<Guid?>("MatchID")
                        .HasColumnType("uuid");

                    b.Property<Guid>("MatchId")
                        .HasColumnType("uuid");

                    b.Property<string>("Minute")
                        .HasColumnType("text");

                    b.Property<int>("PlayerDid")
                        .HasColumnType("integer");

                    b.Property<Guid?>("PlayerID")
                        .HasColumnType("uuid");

                    b.Property<Guid>("PlayerId")
                        .HasColumnType("uuid");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("timestamp without time zone");

                    b.Property<Guid>("createdBy")
                        .HasColumnType("uuid");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("timestamp without time zone");

                    b.HasKey("ID");

                    b.HasIndex("MatchID");

                    b.HasIndex("MatchId");

                    b.HasIndex("PlayerID");

                    b.HasIndex("PlayerId");

                    b.ToTable("MacthStats");
                });

            modelBuilder.Entity("tmretApi.Entities.MahberExecutives", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("BirthDate")
                        .HasColumnType("text");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<string>("FromDate")
                        .HasColumnType("text");

                    b.Property<string>("InActiveDescription")
                        .HasColumnType("text");

                    b.Property<bool>("IsActive")
                        .HasColumnType("boolean");

                    b.Property<Guid?>("MahberID")
                        .HasColumnType("uuid");

                    b.Property<Guid>("MahberId")
                        .HasColumnType("uuid");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<string>("Position")
                        .HasColumnType("text");

                    b.Property<string>("ToDate")
                        .HasColumnType("text");

                    b.Property<string>("UserPhoto")
                        .HasColumnType("text");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("timestamp without time zone");

                    b.Property<Guid>("createdBy")
                        .HasColumnType("uuid");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("timestamp without time zone");

                    b.HasKey("ID");

                    b.HasIndex("MahberID");

                    b.HasIndex("MahberId");

                    b.ToTable("MahberExecutives");
                });

            modelBuilder.Entity("tmretApi.Entities.Matches", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<int>("Game")
                        .HasColumnType("integer");

                    b.Property<DateTime>("MatchDate")
                        .HasColumnType("timestamp without time zone");

                    b.Property<Guid>("MatchWeekId")
                        .HasColumnType("uuid");

                    b.Property<Guid>("SeasonsId")
                        .HasColumnType("uuid");

                    b.Property<Guid>("Team1Id")
                        .HasColumnType("uuid");

                    b.Property<int>("Team1Score")
                        .HasColumnType("integer");

                    b.Property<Guid>("Team2Id")
                        .HasColumnType("uuid");

                    b.Property<int>("Team2Score")
                        .HasColumnType("integer");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("timestamp without time zone");

                    b.Property<Guid>("createdBy")
                        .HasColumnType("uuid");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("timestamp without time zone");

                    b.HasKey("ID");

                    b.HasIndex("MatchWeekId");

                    b.HasIndex("SeasonsId");

                    b.HasIndex("Team1Id");

                    b.HasIndex("Team2Id");

                    b.ToTable("Matches");
                });

            modelBuilder.Entity("tmretApi.Entities.MatchWeek", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("timestamp without time zone");

                    b.Property<Guid>("createdBy")
                        .HasColumnType("uuid");

                    b.Property<bool>("isMatchWeek")
                        .HasColumnType("boolean");

                    b.Property<int>("matchWeek")
                        .HasColumnType("integer");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("timestamp without time zone");

                    b.HasKey("ID");

                    b.HasIndex("matchWeek")
                        .IsUnique();

                    b.ToTable("MatchWeeks");
                });

            modelBuilder.Entity("tmretApi.Entities.News", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<int>("NewsType")
                        .HasColumnType("integer");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("timestamp without time zone");

                    b.Property<Guid>("createdBy")
                        .HasColumnType("uuid");

                    b.Property<string>("description")
                        .HasColumnType("text");

                    b.Property<string>("img")
                        .HasColumnType("text");

                    b.Property<bool>("isApproved")
                        .HasColumnType("boolean");

                    b.Property<bool>("isHeadLine")
                        .HasColumnType("boolean");

                    b.Property<string>("subTitle")
                        .HasColumnType("text");

                    b.Property<string>("title")
                        .HasColumnType("text");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("timestamp without time zone");

                    b.Property<Guid>("userId")
                        .HasColumnType("uuid");

                    b.HasKey("ID");

                    b.HasIndex("userId");

                    b.ToTable("News");
                });

            modelBuilder.Entity("tmretApi.Entities.Player", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<DateTime>("BirthDate")
                        .HasColumnType("timestamp without time zone");

                    b.Property<Guid?>("CurrentTeamID")
                        .HasColumnType("uuid");

                    b.Property<Guid>("CurrentTeamId")
                        .HasColumnType("uuid");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<string>("FullName")
                        .HasColumnType("text");

                    b.Property<float>("Height")
                        .HasColumnType("real");

                    b.Property<string>("Nationality")
                        .HasColumnType("text");

                    b.Property<string>("PlayerImage")
                        .HasColumnType("text");

                    b.Property<int>("Postition")
                        .HasColumnType("integer");

                    b.Property<float>("Weight")
                        .HasColumnType("real");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("timestamp without time zone");

                    b.Property<Guid>("createdBy")
                        .HasColumnType("uuid");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("timestamp without time zone");

                    b.HasKey("ID");

                    b.HasIndex("CurrentTeamID");

                    b.HasIndex("CurrentTeamId");

                    b.ToTable("Players");
                });

            modelBuilder.Entity("tmretApi.Entities.PlayerHistory", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<int>("ContractLength")
                        .HasColumnType("integer");

                    b.Property<DateTime>("Date")
                        .HasColumnType("timestamp without time zone");

                    b.Property<Guid>("FromTeamId")
                        .HasColumnType("uuid");

                    b.Property<Guid?>("PlayerID")
                        .HasColumnType("uuid");

                    b.Property<Guid>("PlayerId")
                        .HasColumnType("uuid");

                    b.Property<Guid>("ToTeamId")
                        .HasColumnType("uuid");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("timestamp without time zone");

                    b.Property<Guid>("createdBy")
                        .HasColumnType("uuid");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("timestamp without time zone");

                    b.HasKey("ID");

                    b.HasIndex("FromTeamId");

                    b.HasIndex("PlayerID");

                    b.HasIndex("PlayerId");

                    b.HasIndex("ToTeamId");

                    b.ToTable("PlayerHistories");
                });

            modelBuilder.Entity("tmretApi.Entities.PlayerStats", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<int>("Assists")
                        .HasColumnType("integer");

                    b.Property<int>("ConsecuativeYellowCard")
                        .HasColumnType("integer");

                    b.Property<int>("Goals")
                        .HasColumnType("integer");

                    b.Property<Guid>("MatchId")
                        .HasColumnType("uuid");

                    b.Property<Guid?>("PlayerID")
                        .HasColumnType("uuid");

                    b.Property<Guid>("PlayerId")
                        .HasColumnType("uuid");

                    b.Property<int>("RedCard")
                        .HasColumnType("integer");

                    b.Property<Guid>("TeamId")
                        .HasColumnType("uuid");

                    b.Property<int>("YellowCard")
                        .HasColumnType("integer");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("timestamp without time zone");

                    b.Property<Guid>("createdBy")
                        .HasColumnType("uuid");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("timestamp without time zone");

                    b.HasKey("ID");

                    b.HasIndex("MatchId");

                    b.HasIndex("PlayerID");

                    b.HasIndex("PlayerId");

                    b.HasIndex("TeamId");

                    b.ToTable("PlayerStats");
                });

            modelBuilder.Entity("tmretApi.Entities.Season", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("FromDate")
                        .HasColumnType("text");

                    b.Property<bool>("IsActive")
                        .HasColumnType("boolean");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<string>("ToDate")
                        .HasColumnType("text");

                    b.Property<int>("Year")
                        .HasColumnType("integer");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("timestamp without time zone");

                    b.Property<Guid>("createdBy")
                        .HasColumnType("uuid");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("timestamp without time zone");

                    b.HasKey("ID");

                    b.ToTable("Seasons");
                });

            modelBuilder.Entity("tmretApi.Entities.SeasonTeams", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<Guid>("SeasonId")
                        .HasColumnType("uuid");

                    b.Property<Guid>("TeamId")
                        .HasColumnType("uuid");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("timestamp without time zone");

                    b.Property<Guid>("createdBy")
                        .HasColumnType("uuid");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("timestamp without time zone");

                    b.HasKey("ID");

                    b.HasIndex("SeasonId");

                    b.HasIndex("TeamId");

                    b.ToTable("SeasonTeams");
                });

            modelBuilder.Entity("tmretApi.Entities.SubscribedUsers", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("email")
                        .HasColumnType("text");

                    b.Property<DateTime>("subscribedDate")
                        .HasColumnType("timestamp without time zone");

                    b.HasKey("ID");

                    b.ToTable("SubscribedUsers");
                });

            modelBuilder.Entity("tmretApi.Entities.Team", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<int>("Draw")
                        .HasColumnType("integer");

                    b.Property<int>("GoalAgainst")
                        .HasColumnType("integer");

                    b.Property<int>("GoalForward")
                        .HasColumnType("integer");

                    b.Property<string>("Logo")
                        .HasColumnType("text");

                    b.Property<int>("Lost")
                        .HasColumnType("integer");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<int>("Played")
                        .HasColumnType("integer");

                    b.Property<int>("Point")
                        .HasColumnType("integer");

                    b.Property<Guid>("SeasonId")
                        .HasColumnType("uuid");

                    b.Property<string>("ShortName")
                        .HasColumnType("text");

                    b.Property<int>("Win")
                        .HasColumnType("integer");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("timestamp without time zone");

                    b.Property<Guid>("createdBy")
                        .HasColumnType("uuid");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("timestamp without time zone");

                    b.HasKey("ID");

                    b.HasIndex("SeasonId");

                    b.ToTable("Teams");
                });

            modelBuilder.Entity("tmretApi.Entities.TmretExecutives", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("BirthDate")
                        .HasColumnType("text");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<string>("FromDate")
                        .HasColumnType("text");

                    b.Property<string>("InActiveDescription")
                        .HasColumnType("text");

                    b.Property<bool>("IsActive")
                        .HasColumnType("boolean");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<string>("Position")
                        .HasColumnType("text");

                    b.Property<Guid>("TemretId")
                        .HasColumnType("uuid");

                    b.Property<string>("ToDate")
                        .HasColumnType("text");

                    b.Property<string>("UserPhoto")
                        .HasColumnType("text");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("timestamp without time zone");

                    b.Property<Guid>("createdBy")
                        .HasColumnType("uuid");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("timestamp without time zone");

                    b.HasKey("ID");

                    b.HasIndex("TemretId");

                    b.ToTable("TmretExecutives");
                });

            modelBuilder.Entity("tmretApi.Entities.User", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("timestamp without time zone");

                    b.Property<Guid>("createdBy")
                        .HasColumnType("uuid");

                    b.Property<string>("email")
                        .HasColumnType("text");

                    b.Property<string>("fullName")
                        .HasColumnType("text");

                    b.Property<bool>("isActive")
                        .HasColumnType("boolean");

                    b.Property<string>("password")
                        .HasColumnType("text");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("timestamp without time zone");

                    b.Property<int>("userRole")
                        .HasColumnType("integer");

                    b.HasKey("ID");

                    b.HasIndex("email")
                        .IsUnique();

                    b.ToTable("Users");
                });

            modelBuilder.Entity("tmretApi.Entities.Degafi", b =>
                {
                    b.HasOne("tmretApi.Entities.DegafiSetting", "DegafiSetting")
                        .WithMany()
                        .HasForeignKey("DegafiSettingId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("tmretApi.Entities.DegafiMahber", "Mahber")
                        .WithMany()
                        .HasForeignKey("MahberId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("DegafiSetting");

                    b.Navigation("Mahber");
                });

            modelBuilder.Entity("tmretApi.Entities.DegafiMahber", b =>
                {
                    b.HasOne("tmretApi.Entities.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("tmretApi.Entities.DegafiMahberExecutive", b =>
                {
                    b.HasOne("tmretApi.Entities.DegafiMahber", "DegafiMahber")
                        .WithMany()
                        .HasForeignKey("DegafiMahberId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("DegafiMahber");
                });

            modelBuilder.Entity("tmretApi.Entities.DegafiSetting", b =>
                {
                    b.HasOne("tmretApi.Entities.DegafiMahber", "mahber")
                        .WithMany()
                        .HasForeignKey("mahberId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("mahber");
                });

            modelBuilder.Entity("tmretApi.Entities.MacthStats", b =>
                {
                    b.HasOne("tmretApi.Entities.Matches", "Match")
                        .WithMany()
                        .HasForeignKey("MatchID");

                    b.HasOne("tmretApi.Entities.Matches", null)
                        .WithMany("MacthStats")
                        .HasForeignKey("MatchId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("tmretApi.Entities.Player", "Player")
                        .WithMany()
                        .HasForeignKey("PlayerID");

                    b.HasOne("tmretApi.Entities.Player", null)
                        .WithMany("MacthStats")
                        .HasForeignKey("PlayerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Match");

                    b.Navigation("Player");
                });

            modelBuilder.Entity("tmretApi.Entities.MahberExecutives", b =>
                {
                    b.HasOne("tmretApi.Entities.DegafiMahber", "Mahber")
                        .WithMany()
                        .HasForeignKey("MahberID");

                    b.HasOne("tmretApi.Entities.DegafiMahber", null)
                        .WithMany("MahberExecutives")
                        .HasForeignKey("MahberId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Mahber");
                });

            modelBuilder.Entity("tmretApi.Entities.Matches", b =>
                {
                    b.HasOne("tmretApi.Entities.MatchWeek", "MatchWeek")
                        .WithMany()
                        .HasForeignKey("MatchWeekId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("tmretApi.Entities.Season", "Seasons")
                        .WithMany()
                        .HasForeignKey("SeasonsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("tmretApi.Entities.Team", "Team1")
                        .WithMany()
                        .HasForeignKey("Team1Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("tmretApi.Entities.Team", "Team2")
                        .WithMany()
                        .HasForeignKey("Team2Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("MatchWeek");

                    b.Navigation("Seasons");

                    b.Navigation("Team1");

                    b.Navigation("Team2");
                });

            modelBuilder.Entity("tmretApi.Entities.News", b =>
                {
                    b.HasOne("tmretApi.Entities.User", "user")
                        .WithMany()
                        .HasForeignKey("userId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("user");
                });

            modelBuilder.Entity("tmretApi.Entities.Player", b =>
                {
                    b.HasOne("tmretApi.Entities.Team", "CurrentTeam")
                        .WithMany()
                        .HasForeignKey("CurrentTeamID");

                    b.HasOne("tmretApi.Entities.Team", null)
                        .WithMany("Players")
                        .HasForeignKey("CurrentTeamId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("CurrentTeam");
                });

            modelBuilder.Entity("tmretApi.Entities.PlayerHistory", b =>
                {
                    b.HasOne("tmretApi.Entities.Team", "FromTeam")
                        .WithMany()
                        .HasForeignKey("FromTeamId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("tmretApi.Entities.Player", "Player")
                        .WithMany()
                        .HasForeignKey("PlayerID");

                    b.HasOne("tmretApi.Entities.Player", null)
                        .WithMany("PlayerHistory")
                        .HasForeignKey("PlayerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("tmretApi.Entities.Team", "ToTeam")
                        .WithMany()
                        .HasForeignKey("ToTeamId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("FromTeam");

                    b.Navigation("Player");

                    b.Navigation("ToTeam");
                });

            modelBuilder.Entity("tmretApi.Entities.PlayerStats", b =>
                {
                    b.HasOne("tmretApi.Entities.Matches", "Match")
                        .WithMany()
                        .HasForeignKey("MatchId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("tmretApi.Entities.Player", "Player")
                        .WithMany()
                        .HasForeignKey("PlayerID");

                    b.HasOne("tmretApi.Entities.Player", null)
                        .WithMany("PlayerStats")
                        .HasForeignKey("PlayerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("tmretApi.Entities.Team", "Team")
                        .WithMany()
                        .HasForeignKey("TeamId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Match");

                    b.Navigation("Player");

                    b.Navigation("Team");
                });

            modelBuilder.Entity("tmretApi.Entities.SeasonTeams", b =>
                {
                    b.HasOne("tmretApi.Entities.Season", "Season")
                        .WithMany()
                        .HasForeignKey("SeasonId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("tmretApi.Entities.Team", "Team")
                        .WithMany()
                        .HasForeignKey("TeamId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Season");

                    b.Navigation("Team");
                });

            modelBuilder.Entity("tmretApi.Entities.Team", b =>
                {
                    b.HasOne("tmretApi.Entities.Season", "Season")
                        .WithMany()
                        .HasForeignKey("SeasonId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Season");
                });

            modelBuilder.Entity("tmretApi.Entities.TmretExecutives", b =>
                {
                    b.HasOne("tmretApi.Entities.User", "Temret")
                        .WithMany()
                        .HasForeignKey("TemretId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Temret");
                });

            modelBuilder.Entity("tmretApi.Entities.DegafiMahber", b =>
                {
                    b.Navigation("MahberExecutives");
                });

            modelBuilder.Entity("tmretApi.Entities.Matches", b =>
                {
                    b.Navigation("MacthStats");
                });

            modelBuilder.Entity("tmretApi.Entities.Player", b =>
                {
                    b.Navigation("MacthStats");

                    b.Navigation("PlayerHistory");

                    b.Navigation("PlayerStats");
                });

            modelBuilder.Entity("tmretApi.Entities.Team", b =>
                {
                    b.Navigation("Players");
                });
#pragma warning restore 612, 618
        }
    }
}
